import { zodAsFactory, zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import { StepSizes } from '../constants/index.ts'
import { XL1BlockRangeZod } from '../model/index.ts'

export const BlockRateZod = z.object({
  range: XL1BlockRangeZod.describe('the block range the rate was calculated over'),
  rate: z.number().nonnegative().describe('time to make a block'),
  span: z.int().nonnegative().describe('number of blocks the rate was calculated over'),
  timeDifference: z.number().nonnegative().describe('time difference from start and end block'),
})

export type BlockRate = z.infer<typeof BlockRateZod>

export const isBlockRate = zodIsFactory(BlockRateZod)
export const asBlockRate = zodAsFactory(BlockRateZod, 'asBlockRate')
export const toBlockRate = zodAsFactory(BlockRateZod, 'toBlockRate')

export const TimeDurationsZod = z.object({
  millis: z.number().nonnegative(),
  seconds: z.number().nonnegative(),
  minutes: z.number().nonnegative(),
  hours: z.number().nonnegative(),
  days: z.number().nonnegative(),
  weeks: z.number().nonnegative(),
})

export const isTimeDurations = zodIsFactory(TimeDurationsZod)
export const asTimeDurations = zodAsFactory(TimeDurationsZod, 'asTimeDurations')
export const toTimeDurations = zodAsFactory(TimeDurationsZod, 'toTimeDurations')

export type TimeDurations = z.infer<typeof TimeDurationsZod>

export const CountZod = z.int().nonnegative().describe('A non-negative integer count')
export type Count = z.infer<typeof CountZod>

export const StepIndexZod = z.int().min(0).max(StepSizes.length).describe('A non-negative integer step index')
export type StepIndex = z.infer<typeof StepIndexZod>
