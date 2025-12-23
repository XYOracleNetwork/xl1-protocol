import { globalRegistry, z } from 'zod'

export const DefaultMetricsScrapePorts = {
  api: 9465,
  bridge: 9468,
  mempool: 9466,
  producer: 9464,
  rewardRedemptionApi: 9467,
}

export const MetricsScrapeConfigZod = z.object({
  path: z.string().default('/metrics').register(globalRegistry, {
    default: '/metrics',
    description: 'Path for the metrics scrape endpoint',
    title: 'telemetry.metrics.scrape.path',
    type: 'string',
  }),
  port: z.coerce.number().int().positive().optional().register(globalRegistry, {
    description: 'Port for the metrics scrape endpoint',
    title: 'telemetry.metrics.scrape.port',
    type: 'number',
  }),
}).describe('Metrics scrape configuration')

export const MetricsConfigZod = z.object({ scrape: MetricsScrapeConfigZod }).describe('Metrics configuration options')

export const OpenTelemetryConfigZod = z.object({
  // OpenTelemetry options
  otlpEndpoint: z.url().optional().register(globalRegistry, {
    description: 'OTLP endpoint for exporting telemetry data',
    title: 'telemetry.otel.otlpEndpoint',
    type: 'string',
  }),
})

export const TelemetryConfigZod = z.object({
  // Metrics configuration
  metrics: MetricsConfigZod.optional().describe('Metrics configuration'),
  // OpenTelemetry configuration
  otel: OpenTelemetryConfigZod.optional().describe('OpenTelemetry configuration'),
}).describe('Telemetry configuration options')

export type TelemetryConfig = z.infer<typeof TelemetryConfigZod>
