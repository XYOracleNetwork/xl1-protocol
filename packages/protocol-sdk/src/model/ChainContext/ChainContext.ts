import type { Logger } from '@xylabs/sdk-js'
import { isDefined, isUndefined } from '@xylabs/sdk-js'

import { LruCacheMap, MemoryMap } from '../../driver/index.ts'
import type { MapType } from '../../map/index.ts'
import { timeBudget } from '../../primitives/index.ts'
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
}

export function contextCache<TCacheValue>(
  context: BaseContext<TCacheValue | unknown>,
  name: string,
  create?: () => MapType<string, TCacheValue>,
): MapType<string, TCacheValue> {
  if (!context.caches) {
    context.caches = {}
  }
  if (isUndefined(context.caches[name])) {
    context.caches[name] = create?.() ?? new MemoryMap<string, TCacheValue>()
  }
  return context.caches[name] as MapType<string, TCacheValue>
}

export interface withContextCacheResponseOptions {
  max?: number
  timeBudgetMs?: number
}

export async function withContextCacheResponse<T extends {} | string | number | bigint>(
  context: BaseContext,
  name: string,
  key: string,
  func: () => Promise<T extends {} | string | number | bigint ? T : never>,
  { max = 10_000, timeBudgetMs = 0 }: withContextCacheResponseOptions = {},
): Promise<T> {
  const cache = contextCache<T>(
    context,
    name,
    () => new LruCacheMap<string, T>({ max }),
  )
  const cacheResult = await cache.get(key)
  if (isDefined(cacheResult)) {
    return cacheResult
  }
  const result = timeBudgetMs > 0 ? await timeBudget(name, context.logger, func, timeBudgetMs) : await func()
  await cache.set(key, result)
  return result
}

export interface ChainContextWrite extends BaseContext, ChainStateContextWrite, ChainStoreContextWrite {}

export interface StakedChainContextWrite extends BaseContext, ChainContextWrite, ChainStakeContextWrite {}

export interface ChainContextRead extends BaseContext, ChainStateContextRead, ChainStoreContextRead {}

export interface StakedChainContextRead extends BaseContext, ChainContextRead, ChainStakeContextRead {}

export type ChainContext = ChainContextRead & ChainContextWrite & ChainStoreContext

export type StakedChainContext = ChainContext & ChainStakeContext & ChainStakeContextRead & ChainStakeContextWrite
