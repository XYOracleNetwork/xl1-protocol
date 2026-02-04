import z from 'zod'

import { BlockBoundWitnessWithHashMetaZod } from '../../zod/index.ts'
import { CachingContextZod } from './CachingContext.zod.ts'

export const HeadContextBaseZod = z.object(
  { head: BlockBoundWitnessWithHashMetaZod },
)

export const HeadContextZod = z.intersection(CachingContextZod, HeadContextBaseZod)
