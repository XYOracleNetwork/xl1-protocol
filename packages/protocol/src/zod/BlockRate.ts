import { zodAsFactory, zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import { XL1BlockRangeZod } from '../model/index.ts'

export const BlockRateZod = z.object({
  range: XL1BlockRangeZod.describe('the block range the rate was calculated over'),
  rate: z.number().nonnegative().describe('time to make a block'),
  span: z.int().nonnegative().describe('number of blocks the rate was calculated over'),
  timeDifference: z.number().nonnegative().describe('time difference from start and end block'),
})

export type BlockRateZod = z.infer<typeof BlockRateZod>

export const isBlockRate = zodIsFactory(BlockRateZod)
export const asBlockRate = zodAsFactory(BlockRateZod, 'asBlockRate')
export const toBlockRate = zodAsFactory(BlockRateZod, 'toBlockRate')
