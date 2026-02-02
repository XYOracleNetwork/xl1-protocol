import type { Tracer } from '@opentelemetry/api'
import type { Logger } from '@xylabs/sdk-js'

import type { MapType } from '../map/index.ts'

export interface BaseContext<TCacheValue = string | object | number | bigint> {
  caches?: Record<string, MapType<string, TCacheValue>>
  logger?: Logger
  singletons: Record<string, unknown>
  timeBudgetLimit?: number
  tracer?: Tracer
}
