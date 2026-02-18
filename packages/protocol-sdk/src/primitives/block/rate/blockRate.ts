import { isDefined, isFalsy } from '@xylabs/sdk-js'
import type {
  BlockViewer,
  HydratedBlock, TimeDurations, XL1BlockNumber, XL1BlockRange, XL1BlockRate,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockRange } from '@xyo-network/xl1-protocol'

import { rateMultipliers, timeDurations } from './timeHelpers.ts'

export const blockRate = (
  startBlock: HydratedBlock,
  endBlock: HydratedBlock,
  timeUnit?: keyof TimeDurations,
): XL1BlockRate => {
  const startingBlock = startBlock[0]
  const endingBlock = endBlock[0]

  const heightDifference = endingBlock.block - startingBlock.block
  const timeDifference = endingBlock.$epoch - startingBlock.$epoch

  if (timeDifference === 0) {
    throw new Error('Time difference must be greater than 0')
  }

  const rate = heightDifference / timeDifference

  const returnedTimeDifference = isDefined(timeUnit) ? timeDurations(timeDifference)[timeUnit] : timeDifference
  const timePerBlock = returnedTimeDifference / heightDifference

  return {
    range: asXL1BlockRange([startingBlock.block, endingBlock.block], true),
    span: heightDifference,
    rate: isDefined(timeUnit) ? rate * rateMultipliers[timeUnit] : rate,
    rateUnit: isDefined(timeUnit) ? timeUnit : 'millis',
    timeDifference: returnedTimeDifference,
    timePerBlock,
  }
}

export const getBlockRateBlocks = async (
  viewer: BlockViewer,
  startBlockHeight: XL1BlockNumber,
  endBlockHeight: XL1BlockNumber,
): Promise<{ endingBlock: HydratedBlock; startingBlock: HydratedBlock }> => {
  if (endBlockHeight <= startBlockHeight) {
    console.error('startBlockHeight', startBlockHeight)
    console.error('endBlockHeight', endBlockHeight)
    throw new Error('End block height must be greater than start block height')
  }

  const startingBlock = await viewer.blockByNumber(startBlockHeight)
  const endingBlock = await viewer.blockByNumber(endBlockHeight)

  if (isFalsy(startingBlock) || isFalsy(endingBlock)) {
    throw new Error('Could not retrieve blocks for speed calculation')
  }

  return { startingBlock, endingBlock }
}

export const calculateBlockRate = async (
  viewer: BlockViewer,
  range: XL1BlockRange,
  timeUnit?: keyof TimeDurations,
): Promise<XL1BlockRate> => {
  const [startBlockHeight, endBlockHeight] = range
  const { startingBlock, endingBlock } = await getBlockRateBlocks(
    viewer,
    startBlockHeight,
    endBlockHeight,
  )
  return blockRate(startingBlock, endingBlock, timeUnit)
}
