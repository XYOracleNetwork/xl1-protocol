import type { Tracer } from '@opentelemetry/api'
import type { Logger } from '@xylabs/sdk-js'
import {
  isDefined, isObject, isUndefined,
} from '@xylabs/sdk-js'

import { LruCacheMap, MemoryMap } from '../../driver/index.ts'
import { timeBudget } from '../../primitives/index.ts'
import type { MapType } from '../map/index.ts'
import type {
  ChainStakeContext, ChainStakeContextRead, ChainStakeContextWrite,
} from './ChainStakeContext.ts'
import type { ChainStateContextRead, ChainStateContextWrite } from './ChainStateContext.ts'
import type {
  ChainStoreContext, ChainStoreContextRead, ChainStoreContextWrite,
} from './ChainStoreContext.ts'

export interface BaseContext<TCacheValue = string | object | number | bigint> {
  caches?: Record<string, MapType<string, TCacheValue>>
  logger?: Logger
  singletons: Record<string, unknown>
  timeBudgetLimit?: number
  tracer?: Tracer
}

export interface CachingBaseContext<TCacheValue = string | object | number | bigint> extends BaseContext<TCacheValue> {
  caches: Record<string, MapType<string, TCacheValue>>
}

export function contextCache<TCacheValue>(
  context: CachingBaseContext<TCacheValue | unknown>,
  name: string,
  create?: () => MapType<string, TCacheValue>,
): MapType<string, TCacheValue> {
  if (!isObject(context.caches)) {
    throw new Error('Context does not have an appropriate caches property')
  }
  if (isUndefined(context.caches[name])) {
    context.caches[name] = create?.() ?? new MemoryMap<string, TCacheValue>()
  }
  return context.caches[name] as MapType<string, TCacheValue>
}

export interface withContextCacheResponseOptions {
  max?: number
}

export async function withContextCacheResponse<T extends {} | string | number | bigint>(
  context: CachingBaseContext,
  name: string,
  key: string,
  func: () => Promise<T extends {} | string | number | bigint ? T : never>,
  { max = 10_000 }: withContextCacheResponseOptions = {},
): Promise<T> {
  const cache = contextCache<Promise<T>>(
    context,
    name,
    () => new LruCacheMap<string, Promise<T>>({ max }),
  )
  const { timeBudgetLimit = 0 } = context
  const cacheResult = await cache.get(key)
  if (isDefined(cacheResult)) {
    return cacheResult
  }
  const result = timeBudgetLimit > 0 ? timeBudget(name, context.logger, func, timeBudgetLimit) : func()
  await cache.set(key, result)
  return result
}

export interface ChainContextWrite extends BaseContext, ChainStateContextWrite, ChainStoreContextWrite {}

export interface StakedChainContextWrite extends BaseContext, ChainContextWrite, ChainStakeContextWrite {}

export interface ChainContextRead extends CachingBaseContext, ChainStateContextRead, ChainStoreContextRead {}

export interface StakedChainContextRead extends CachingBaseContext, ChainContextRead, ChainStakeContextRead {}

export type ChainContext = ChainContextRead & ChainContextWrite & ChainStoreContext

export type StakedChainContext = ChainContext & ChainStakeContext & ChainStakeContextRead & ChainStakeContextWrite
