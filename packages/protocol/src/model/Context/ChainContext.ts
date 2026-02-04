import type z from 'zod'

import type {
  ChainContextReadZod, ChainContextWriteZod, ChainContextZod,
} from './ChainContext.zod.ts'

export type ChainContextRead = z.infer<typeof ChainContextReadZod>
export type ChainContextWrite = z.infer<typeof ChainContextWriteZod>
export type ChainContext = z.infer<typeof ChainContextZod>
