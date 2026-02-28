import type {
  Payload,
  ReadArchivist, WriteArchivist,
} from '@xyo-network/sdk-js'
import z from 'zod'

import { CachingContextZod } from './CachingContext.zod.ts'

export const BlockContextReadZod = CachingContextZod.extend(
  { chainMap: z.custom<ReadArchivist<Payload>>(val => val && typeof val === 'object' && ('get' in val)) },
)

export const BlockContextWriteZod = CachingContextZod.extend(
  { chainMap: z.custom<WriteArchivist<Payload>>(val => val && typeof val === 'object' && ('get' in val && 'insert' in val)) },
)

export const BlockContextZod = BlockContextWriteZod
