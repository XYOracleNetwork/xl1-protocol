import z from 'zod'

import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '../zod/index.ts'

export const RangeZod = z.tuple([z.number(), z.number()])

export type Range = z.infer<typeof RangeZod>

export const isRange = zodIsFactory<Range>(RangeZod)
export const asRange = zodAsFactory<Range>(RangeZod)
export const toRange = zodToFactory<Range>(RangeZod)
