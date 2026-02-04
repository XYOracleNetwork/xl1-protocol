import type z from 'zod'

import type {
  BlockContextReadZod, BlockContextWriteZod, BlockContextZod,
} from './BlockContext.zod.ts'

export type BlockContextRead = z.infer<typeof BlockContextReadZod>
export type BlockContextWrite = z.infer<typeof BlockContextWriteZod>
export type BlockContext = z.infer<typeof BlockContextZod>
