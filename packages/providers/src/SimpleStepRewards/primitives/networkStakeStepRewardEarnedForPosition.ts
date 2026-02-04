import type {
  BlockViewer,
  CachingContext,
  Position,
  StakeEventsViewer,
  StepIdentity,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'
import {
  externalBlockRangeFromStep, stepRewardTotal, weightedStakeForRangeByPosition, withContextCacheResponse,
} from '@xyo-network/xl1-protocol-sdk'

export async function networkStakeStepRewardEarnedForPosition(
  context: CachingContext,
  blockViewer: BlockViewer,
  stakeEventsViewer: StakeEventsViewer,
  stepIdentity: StepIdentity,
  position: Position,
  rewardMultipliers: XL1RangeMultipliers = {},
): Promise<[bigint, bigint]> {
  const cacheKey = `${stepIdentity.block}|${stepIdentity.step}|${position.id}`
  return await withContextCacheResponse(context, 'networkStakeStepRewardEarnedForPosition', cacheKey, async () => {
    const range = await externalBlockRangeFromStep(context, blockViewer, stepIdentity)
    const numerator = position.staked === XYO_NETWORK_STAKING_ADDRESS
      ? await weightedStakeForRangeByPosition(
          context,
          blockViewer,
          stakeEventsViewer,
          range,
          XYO_NETWORK_STAKING_ADDRESS,
          position.id,
        )
      : 0n

    const denominator = await weightedStakeForRangeByPosition(
      context,
      blockViewer,
      stakeEventsViewer,
      range,
    )

    const totalReward = await stepRewardTotal(context, blockViewer, stepIdentity, rewardMultipliers)
    const positionReward = denominator > 0n ? totalReward * numerator / denominator : 0n
    const result: [bigint, bigint] = [positionReward, totalReward]
    return result
  })
}
