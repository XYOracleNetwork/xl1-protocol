import z from 'zod'

import { BlockContextReadZod, BlockContextWriteZod } from './BlockContext.zod.ts'
import { HeadContextBaseZod } from './HeadContext.zod.ts'

export const ChainContextReadZod = z.intersection(
  HeadContextBaseZod,
  BlockContextReadZod,
)

export const ChainContextWriteZod = z.intersection(
  HeadContextBaseZod,
  BlockContextWriteZod,
)

export const ChainContextZod = z.intersection(
  ChainContextReadZod,
  ChainContextWriteZod,
)
