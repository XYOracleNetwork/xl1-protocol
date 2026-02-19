import type { Payload, WithStorageMeta } from '@xyo-network/sdk-js'
import z from 'zod'

import type { PayloadMapRead, PayloadMapWrite } from '../PayloadMap.ts'
import { CachingContextZod } from './CachingContext.zod.ts'

export const BlockContextReadZod = CachingContextZod.extend(
  { chainMap: z.custom<PayloadMapRead<WithStorageMeta<Payload>>>(val => val && typeof val === 'object' && ('get' in val || 'set' in val)) },
)

export const BlockContextWriteZod = CachingContextZod.extend(
  { chainMap: z.custom<PayloadMapWrite<WithStorageMeta<Payload>>>(val => val && typeof val === 'object' && ('get' in val || 'set' in val)) },
)

export const BlockContextZod = z.intersection(
  BlockContextReadZod,
  BlockContextWriteZod,
)
