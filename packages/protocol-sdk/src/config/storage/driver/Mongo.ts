import { isDefined, isUndefined } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

/**
 * Checks if the provided MongoDB configuration contains all necessary fields
 * for establishing a connection.
 * @param config MongoDB configuration object
 * @returns True if the configuration contains all necessary fields for
 * establishing a connection
 */
export const hasMongoConfig = (config?: MongoConfig): config is Required<MongoConfig> => {
  if (isUndefined(config)) return false
  return (
    isDefined(config.connectionString)
    && isDefined(config.database)
    && isDefined(config.domain)
    && isDefined(config.password)
    && isDefined(config.username)
  )
}

export const MongoConfigZod = z.object({
  // TODO: Create from other arguments
  connectionString: z.string().nonempty().optional().register(globalRegistry, {
    description: 'MongoDB connection string',
    title: 'storage.mongo.connectionString',
    type: 'string',
  }),
  database: z.string().nonempty().optional().register(globalRegistry, {
    description: 'MongoDB database name',
    title: 'storage.mongo.database',
    type: 'string',
  }),
  domain: z.string().nonempty().optional().register(globalRegistry, {
    description: 'MongoDB domain',
    title: 'storage.mongo.domain',
    type: 'string',
  }),
  password: z.string().nonempty().optional().register(globalRegistry, {
    description: 'MongoDB password',
    title: 'storage.mongo.password',
    type: 'string',
  }),
  username: z.string().nonempty().optional().register(globalRegistry, {
    description: 'MongoDB username',
    title: 'storage.mongo.username',
    type: 'string',
  }),
})

export type MongoConfig = z.infer<typeof MongoConfigZod>
