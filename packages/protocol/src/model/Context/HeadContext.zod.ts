import { WithHashMetaZod } from '@xyo-network/sdk-js'
import z from 'zod'

import { BlockBoundWitnessZod } from '../../block/index.ts'
import { CachingContextZod } from './CachingContext.zod.ts'

export const HeadContextBaseZod = z.object(
  { head: WithHashMetaZod(BlockBoundWitnessZod) },
)

export const HeadContextZod = CachingContextZod.safeExtend(HeadContextBaseZod.shape)
