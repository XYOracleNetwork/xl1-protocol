import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { z } from 'zod'

export const RangeZod = z.tuple([z.number(), z.number()])

export type Range = z.infer<typeof RangeZod>

export const isRange = zodIsFactory<Range>(RangeZod)
export const asRange = zodAsFactory<Range>(RangeZod, 'Range')
export const toRange = zodToFactory<Range>(RangeZod, 'Range')
