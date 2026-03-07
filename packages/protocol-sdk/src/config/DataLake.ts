import { globalRegistry, z } from 'zod'

export const DataLakeRemoteConfigBaseZod = z.object({
  protocol: z.string('rest').register(globalRegistry, {
    description: 'Protocol for the REST connection',
    type: 'string',
  }),
}).describe('Base configuration for the remote REST')

export type DataLakeRemoteConfigBase = z.infer<typeof DataLakeRemoteConfigBaseZod>

export const RestDataLakeRemoteConfigZod = DataLakeRemoteConfigBaseZod.extend({
  protocol: z.string('rest').register(globalRegistry, {
    description: 'Protocol for the REST connection',
    type: 'string',
  }).default('rest'),
  url: z.string().register(globalRegistry, {
    description: 'URL for the Data Lake REST API',
    type: 'string',
  }),
}).describe('Configuration for the remote REST using Rest')

export type RestDataLakeRemoteConfig = z.infer<typeof RestDataLakeRemoteConfigZod>

export const DataLakeRemoteConfigZod = RestDataLakeRemoteConfigZod
  .describe('Configuration for a remote REST connection using Rest')

export type DataLakeRemoteConfig = z.infer<typeof DataLakeRemoteConfigZod>

export const DataLakeConfigZod = z.object({ dataLakes: DataLakeRemoteConfigZod.optional() }).describe('Configuration for remote data lake connections, including REST')

export type DataLakeConfig = z.infer<typeof DataLakeConfigZod>
