import type { CachingContext } from '@xyo-network/xl1-protocol'
import { CachingContextZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { Config } from '../config/index.ts'
import { ConfigZod } from '../config/index.ts'
import type { RuntimeStatusMonitor } from '../status/index.ts'
import type { ProviderFactoryLocatorInstance } from './ProviderFactoryLocatorInstance.ts'

export const RuntimeStatusMonitorZod = z.custom<RuntimeStatusMonitor>(val => val && typeof val === 'object')

export const ProviderFactoryLocatorZod: z.ZodType<ProviderFactoryLocatorInstance> = z.lazy(() =>
  z.custom<ProviderFactoryLocatorInstance>(val => val && typeof val === 'object' && 'context' in val && 'registry' in val))

export type CreatableProviderContextType = CachingContext & {
  _id?: string
  config: Config
  locator: ProviderFactoryLocatorInstance
  statusReporter?: RuntimeStatusMonitor
}

export const CreatableProviderContextZod: z.ZodType<CreatableProviderContextType> = z.lazy(() =>
  CachingContextZod.extend({
    _id: z.string().optional(),
    config: ConfigZod,
    locator: ProviderFactoryLocatorZod,
    statusReporter: RuntimeStatusMonitorZod.optional(),
  }))
