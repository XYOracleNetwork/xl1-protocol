import {
  BlockContextReadZod, BlockContextWriteZod, BlockContextZod,
} from './BlockContext.zod.ts'
import { HeadContextBaseZod } from './HeadContext.zod.ts'

export const ChainContextReadZod = BlockContextReadZod.safeExtend(HeadContextBaseZod.shape)

export const ChainContextWriteZod = BlockContextWriteZod.safeExtend(
  HeadContextBaseZod.shape,
)

export const ChainContextZod = BlockContextZod.safeExtend(
  HeadContextBaseZod.shape,
)
