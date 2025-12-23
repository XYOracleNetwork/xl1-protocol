import type { Address } from '@xylabs/sdk-js'
import type {
  StepIdentity,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'
import type {
  BlockViewer,
  StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'
import {
  toStepIdentityString,
  withContextCacheResponse,
} from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarnedForPosition } from './networkStakeStepRewardEarnedForPosition.ts'

export async function networkStakeStepRewardEarnedForStaker(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
  stepIdentity: StepIdentity,
  staker: Address,
  rewardMultipliers: XL1RangeMultipliers = {},
): Promise<[bigint, bigint]> {
  const stepId = toStepIdentityString(stepIdentity)
  return await withContextCacheResponse(context, 'networkStakeStepRewardEarnedForStaker', `${stepId}-${staker}`, async () => {
    const positions = (await context.stake.stakesByStaker(staker)).filter(pos => pos.staked === XYO_NETWORK_STAKING_ADDRESS)
    const results = await Promise.all(positions.map((pos) => {
      return networkStakeStepRewardEarnedForPosition(
        context,
        blockViewer,
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
