import { z } from 'zod'

export const NumberishZod = z.union([z.number(), z.string(), z.bigint()])
  .transform(v => (typeof v === 'bigint' ? Number(v) : typeof v === 'string' ? Number(v) : v))
  .pipe(z.number())

export type Numberish = z.input<typeof NumberishZod>
