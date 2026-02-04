import z from 'zod'

import { BlockBoundWitnessWithHashMetaZod } from '../../zod/index.ts'
import { BlockContextReadZod, BlockContextWriteZod } from './BlockContext.zod.ts'
import { CachingContextZod } from './CachingContext.zod.ts'

export const ChainContextBaseZod = CachingContextZod.extend(
  { head: BlockBoundWitnessWithHashMetaZod },
)

export const ChainContextReadZod = z.intersection(
  ChainContextBaseZod,
  BlockContextReadZod,
)

export const ChainContextWriteZod = z.intersection(
  ChainContextBaseZod,
  BlockContextWriteZod,
)

export const ChainContextZod = z.intersection(
  ChainContextReadZod,
  ChainContextWriteZod,
)
