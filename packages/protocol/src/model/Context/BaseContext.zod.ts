import type { MeterProvider, TracerProvider } from '@opentelemetry/api'
import type { Logger } from '@xylabs/sdk-js'
import { z } from 'zod'

import type { MapType } from '../../map/index.ts'

export const CachesZod = z.record(
  z.string(),
  z.custom<MapType<string, unknown>>(val => val && typeof val === 'object' && ('get' in val || 'set' in val)),
)

export const SingletonsZod = z.record(z.string(), z.unknown())

export const LoggerZod = z.custom<Logger>(val => val && typeof val === 'object' && 'info' in val && 'error' in val)

export const MeterProviderZod = z.custom<MeterProvider>(val => val && typeof val === 'object' && 'getMeter' in val)

export const TracerProviderZod = z.custom<TracerProvider>(val => val && typeof val === 'object' && 'getTracer' in val)

export const TimeBudgetLimitZod = z.number()

export const BaseContextZod = z.object({
  caches: CachesZod.optional(),
  logger: LoggerZod.optional(),
  meterProvider: MeterProviderZod.optional(),
  singletons: SingletonsZod,
  timeBudgetLimit: TimeBudgetLimitZod.optional(),
  traceProvider: TracerProviderZod.optional(),
})
