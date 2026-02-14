import { zodAsFactory, zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { EthBlockNumber, XL1BlockNumber } from './BlockNumber/index.ts'
import { XL1BlockRangeZod } from './BlockRange/index.ts'
import { StepSizes } from './StepSizes.ts'

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

export const BlockRateZod = z.object({
  range: XL1BlockRangeZod.describe('the block range the rate was calculated over'),
  rate: z.number().nonnegative().describe('time to make a block'),
  rateUnit: TimeDurationsZod.keyof().describe('the unit of time for the rate'),
  span: z.int().nonnegative().describe('number of blocks the rate was calculated over'),
  timeDifference: z.number().nonnegative().describe('time difference from start and end block'),
})

export type BlockRate = z.infer<typeof BlockRateZod>

export type GenericBlockRate<TBlockNumber extends number> = Omit<BlockRate, 'range'> & {
  range: [TBlockNumber, TBlockNumber]
}

export interface XL1BlockRate extends GenericBlockRate<XL1BlockNumber> {}
export interface EthBlockRate extends GenericBlockRate<EthBlockNumber> {}

export const isBlockRate = zodIsFactory(BlockRateZod)
export const asBlockRate = zodAsFactory(BlockRateZod, 'asBlockRate')
export const toBlockRate = zodAsFactory(BlockRateZod, 'toBlockRate')

export const CountZod = z.int().nonnegative().describe('A non-negative integer count')
export type Count = z.infer<typeof CountZod>

export const StepIndexZod = z.int().min(0).max(StepSizes.length).describe('A non-negative integer step index')
export type StepIndex = z.infer<typeof StepIndexZod>

const timeUnitSchema = z.number().positive()

export const TimeConfigZod = z.object({
  minutes: timeUnitSchema.optional(),
  hours: timeUnitSchema.optional(),
  days: timeUnitSchema.optional(),
  weeks: timeUnitSchema.optional(),
  months: timeUnitSchema.optional(),
  years: timeUnitSchema.optional(),
}).describe('Time configuration with optional time units')

export type TimeConfig = z.infer<typeof TimeConfigZod>

export const isTimeConfig = zodIsFactory(TimeConfigZod)
export const asTimeConfig = zodAsFactory(TimeConfigZod, 'asTimeConfig')
export const toTimeConfig = zodAsFactory(TimeConfigZod, 'toTimeConfig')

export const SingleTimeConfigZod = z.union([
  z.object({ minutes: timeUnitSchema }),
  z.object({ hours: timeUnitSchema }),
  z.object({ days: timeUnitSchema }),
  z.object({ weeks: timeUnitSchema }),
  z.object({ months: timeUnitSchema }),
  z.object({ years: timeUnitSchema }),
]).describe('Time configuration with exactly one time unit')

export type SingleTimeConfig = z.infer<typeof SingleTimeConfigZod>

export const isSingleTimeConfig = zodIsFactory(SingleTimeConfigZod)
export const asSingleTimeConfig = zodAsFactory(SingleTimeConfigZod, 'asSingleTimeConfig')
export const toSingleTimeConfig = zodAsFactory(SingleTimeConfigZod, 'toSingleTimeConfig')
