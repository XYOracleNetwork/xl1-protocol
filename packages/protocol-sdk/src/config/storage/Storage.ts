import { globalRegistry, z } from 'zod'

import { MongoConfigZod } from './driver/index.ts'

export const StorageConfigZod = z.object({
  mongo: MongoConfigZod.optional().describe('Configuration for the MongoD storage driver'),
  root: z.string().optional().register(globalRegistry, {
    description: 'Root directory for local storage',
    title: 'storage.root',
    type: 'string',
  }),
}).describe('Storage configuration options')

export type StorageConfig = z.infer<typeof StorageConfigZod>
