import type {
  AttoXL1, BlockViewer, ChainContext, StepIdentity, XL1BlockRange,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { asAttoXL1, asXL1BlockRange } from '@xyo-network/xl1-protocol'

import { XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK } from '../../../constants.ts'
import { blockRangeSteps } from '../../block/index.ts'
import { stepRewardTotal } from './stepRewardTotal.ts'

export async function stepsRewardTotalGenesisPeriod(context: ChainContext, blockViewer: BlockViewer, multipliers: XL1RangeMultipliers, stepSizes?: number[]): Promise<AttoXL1> {
  const range = asXL1BlockRange([0, XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK], { name: 'stepsRewardTotalGenesisPeriod' })
  return await stepsRewardTotalRange(context, blockViewer, range, stepSizes, multipliers)
}

export async function stepsRewardTotalRange(
  context: ChainContext,
  blockViewer: BlockViewer,
  range: XL1BlockRange,
  stepSizes: number[] = [3, 4, 5, 6],
  multipliers: XL1RangeMultipliers,
): Promise<AttoXL1> {
  const steps = blockRangeSteps(range, stepSizes)
  return await stepsRewardTotal(context, blockViewer, steps, multipliers)
}

export async function stepsRewardTotal(context: ChainContext, blockViewer: BlockViewer, steps: StepIdentity[], multipliers: XL1RangeMultipliers): Promise<AttoXL1> {
  let totalRewards = 0n
  for (const step of steps) {
    const stepTotal = await stepRewardTotal(context, blockViewer, step, multipliers)
    totalRewards += stepTotal
  }
  return asAttoXL1(totalRewards)
}
