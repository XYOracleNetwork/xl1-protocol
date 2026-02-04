import type { Address } from '@xylabs/sdk-js'
import type {
  BlockViewer,
  CachingContext,
  StakeViewer,
  StepIdentity,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'
import {
  toStepIdentityString,
  withContextCacheResponse,
} from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarnedForPosition } from './networkStakeStepRewardEarnedForPosition.ts'

export async function networkStakeStepRewardEarnedForStaker(
  context: CachingContext,
  blockViewer: BlockViewer,
  stakeViewer: StakeViewer,
  stepIdentity: StepIdentity,
  staker: Address,
  rewardMultipliers: XL1RangeMultipliers = {},
): Promise<[bigint, bigint]> {
  const stepId = toStepIdentityString(stepIdentity)
  return await withContextCacheResponse(context, 'networkStakeStepRewardEarnedForStaker', `${stepId}-${staker}`, async () => {
    const positions = (await stakeViewer.stakesByStaker(staker)).filter(pos => pos.staked === XYO_NETWORK_STAKING_ADDRESS)
    const results = await Promise.all(positions.map((pos) => {
      return networkStakeStepRewardEarnedForPosition(
        context,
        blockViewer,
        stakeViewer.stakeEvents,
        stepIdentity,
        pos,
        rewardMultipliers,
      )
    }))

    const numerator = results.reduce((acc, [positionReward]) => acc + positionReward, 0n)

    const result: [bigint, bigint] = results.length > 0 ? [numerator, results[0][1]] : [0n, 0n]
    return result
  })
}
