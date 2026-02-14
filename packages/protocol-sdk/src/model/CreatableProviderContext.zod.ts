import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import type { CachingContext } from '@xyo-network/xl1-protocol'
import { CachingContextZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import { type BaseConfig, BaseConfigZod } from '../config/index.ts'
import type { ProviderFactoryLocatorInstance } from '../CreatableProvider/index.ts'
import type { RuntimeStatusMonitor } from '../status/index.ts'

export const RuntimeStatusMonitorZod = z.custom<RuntimeStatusMonitor>(val => val && typeof val === 'object')

export const ProviderFactoryLocatorZod: z.ZodType<ProviderFactoryLocatorInstance> = z.lazy(() =>
  z.custom<ProviderFactoryLocatorInstance>(val => val && typeof val === 'object' && 'context' in val && 'registry' in val))

export type CreatableProviderContextType = CachingContext & {
  _id?: string
  config: BaseConfig
  locator: ProviderFactoryLocatorInstance
  statusReporter?: RuntimeStatusMonitor
}

export const BaseConfigContextZod = CachingContextZod.extend({ config: BaseConfigZod.loose() })
export type BaseConfigContext = z.infer<typeof BaseConfigContextZod>

export const CreatableProviderContextZod: z.ZodType<CreatableProviderContextType> = z.lazy(() =>
  BaseConfigContextZod.extend({
    _id: z.string().optional(),
    locator: ProviderFactoryLocatorZod,
    statusReporter: RuntimeStatusMonitorZod.optional(),
  }))

export const isBaseConfigContext = zodIsFactory(BaseConfigContextZod)
export const asBaseConfigContext = zodAsFactory(BaseConfigContextZod, 'asBaseConfigContext')
export const toBaseConfigContext = zodToFactory(BaseConfigContextZod, 'toBaseConfigContext')

export const isCreatableProviderContext = zodIsFactory(CreatableProviderContextZod)
export const asCreatableProviderContext = zodAsFactory(CreatableProviderContextZod, 'asCreatableProviderContext')
export const toCreatableProviderContext = zodToFactory(CreatableProviderContextZod, 'toCreatableProviderContext')
