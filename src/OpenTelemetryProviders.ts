import type { MeterProvider, TracerProvider } from '@opentelemetry/api'

export interface OpenTelemetryProviders {
  meterProvider?: MeterProvider
  traceProvider?: TracerProvider
}
