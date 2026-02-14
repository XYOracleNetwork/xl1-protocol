import z from 'zod'

import { BlockBoundWitnessWithHashMetaZod } from '../block/index.ts'
import { CachingContextZod } from './CachingContext.zod.ts'

export const HeadContextBaseZod = z.object(
  { head: BlockBoundWitnessWithHashMetaZod },
)

export const HeadContextZod = z.intersection(CachingContextZod, HeadContextBaseZod)
