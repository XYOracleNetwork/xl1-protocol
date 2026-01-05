import {
  assertEx, isDefined, isDefinedNotNull,
} from '@xylabs/sdk-js'
import type {
  BlockBoundWitness,
  SingleTimeConfig,
  TimeDurations,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, asXL1BlockRange } from '@xyo-network/xl1-protocol'

import type { BlockViewer } from '../../../viewers/index.ts'
import { calculateBlockRate } from './blockRate.ts'
import { getTimeConfigInMilliseconds } from './timeHelpers.ts'

export const calculateTimeRate = async (
  viewer: BlockViewer,
  timeConfig: SingleTimeConfig,
  startBlockNumber?: XL1BlockNumber,
  timeUnit?: keyof TimeDurations,
  // default tolerance of 30 seconds to cut down on iterations
  toleranceMs = 30_000,
  // maximum recursive attempts to prevent infinite loops
  maxAttempts = 10,
) => {
  // check the time config has only one key
  assertEx(Object.keys(timeConfig ?? {}).length === 1, () => 'Only one time unit should be specified in timeConfig')

  // resolve the starting block
  const startBlock = isDefinedNotNull(startBlockNumber) ? await viewer.blockByNumber(startBlockNumber) : null
  const resolvedStartBlock = isDefinedNotNull(startBlock)
    ? startBlock[0]
    : (await viewer.currentBlock())[0]

  const timeInMilliseconds = getTimeConfigInMilliseconds(timeConfig)
  assertEx(timeInMilliseconds > 0, () => 'Time duration must be greater than zero')

  // Estimate blocks per milliseconds (bpm) based on average block time
  const blocksPerMillisecondRate = 1 / 340.16 // Approximate average block time of 340.16 ms

  // Calculate the number of blocks in the given time duration
  const initialBlocksInDuration = Math.floor(blocksPerMillisecondRate * timeInMilliseconds)

  // Recursively find the proper end block
  const endBlockNumber = await findEndBlockRecursive(
    viewer,
    resolvedStartBlock,
    timeInMilliseconds,
    initialBlocksInDuration,
    toleranceMs,
    maxAttempts,
  )

  return await calculateBlockRate(
    viewer,
    asXL1BlockRange([endBlockNumber, resolvedStartBlock.block], true),
    timeUnit,
  )
}

const findEndBlockRecursive = async (
  viewer: BlockViewer,
  startBlock: BlockBoundWitness,
  targetTimeMs: number,
  estimatedBlocksBack: number,
  toleranceMs: number,
  attemptsRemaining: number,
): Promise<XL1BlockNumber> => {
  assertEx(attemptsRemaining > 0, () => 'Maximum attempts reached while searching for end block')

  const startBlockEpoch = startBlock.$epoch
  const estimatedEndBlockNumber = asXL1BlockNumber(startBlock.block - estimatedBlocksBack, true)

  // Fetch the estimated end block
  const endBlock = await viewer.blockByNumber(estimatedEndBlockNumber)
  const resolvedEndBlock = assertEx(
    isDefined(endBlock?.[0]) ? endBlock[0] : undefined,
    () => `Could not retrieve block ${estimatedEndBlockNumber} for time rate calculation`,
  )

  const endBlockEpoch = resolvedEndBlock.$epoch
  const actualTimeDifference = startBlockEpoch - endBlockEpoch

  // Check if we're within tolerance
  const timeDelta = Math.abs(actualTimeDifference - targetTimeMs)
  if (timeDelta <= toleranceMs) {
    return resolvedEndBlock.block
  }

  // Calculate adjustment factor and recursively search
  let adjustedBlocksBack: number
  if (actualTimeDifference < targetTimeMs) {
    // Need to go further back
    const adjustmentFactor = targetTimeMs / actualTimeDifference
    adjustedBlocksBack = Math.floor(estimatedBlocksBack * adjustmentFactor)
  } else {
    // Need to come forward
    const adjustmentFactor = actualTimeDifference / targetTimeMs
    adjustedBlocksBack = Math.floor(estimatedBlocksBack / adjustmentFactor)
  }

  return await findEndBlockRecursive(
    viewer,
    startBlock,
    targetTimeMs,
    adjustedBlocksBack,
    toleranceMs,
    attemptsRemaining - 1,
  )
}
