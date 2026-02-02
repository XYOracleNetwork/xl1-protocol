import type {
  BlockViewer,
  StepIdentity, XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'
import type { StakedChainContextRead } from '@xyo-network/xl1-protocol-sdk'
import { withContextCacheResponse } from '@xyo-network/xl1-protocol-sdk'

import { networkStakeStepRewardEarnedForPosition } from './networkStakeStepRewardEarnedForPosition.ts'

export async function networkStakeStepRewardEarned(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
  stepIdentity: StepIdentity,
  rewardMultipliers: XL1RangeMultipliers = {},
): Promise<[bigint, bigint]> {
  const cacheKey = `${stepIdentity.block}|${stepIdentity.step}`
  return await withContextCacheResponse(context, 'networkStakeStepRewardEarned', cacheKey, async () => {
    const positions = (await context.stake.stakesByStaked(XYO_NETWORK_STAKING_ADDRESS))
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
