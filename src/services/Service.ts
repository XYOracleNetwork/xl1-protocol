import type { Meter, Tracer } from '@opentelemetry/api'
import type { Logger } from '@xylabs/logger'

export type ServiceName = Exclude<string, 'reserved-service-name-value'>

export interface Service {
  logger?: Logger
  meter?: Meter
  tracer?: Tracer
}
