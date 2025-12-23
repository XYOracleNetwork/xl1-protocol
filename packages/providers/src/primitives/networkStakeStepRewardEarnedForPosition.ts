import type {
  StepIdentity,
  XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'
import type {
  BlockViewer,
  Position,
  StakedChainContextRead,
} from '@xyo-network/xl1-protocol-sdk'
import {
  externalBlockRangeFromStep, stepRewardTotal, weightedStakeForRangeByPosition, withContextCacheResponse,
} from '@xyo-network/xl1-protocol-sdk'

export async function networkStakeStepRewardEarnedForPosition(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
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
          range,
          XYO_NETWORK_STAKING_ADDRESS,
          position.id,
        )
      : 0n

    const denominator = await weightedStakeForRangeByPosition(
      context,
      blockViewer,
      range,
    )

    const totalReward = await stepRewardTotal(context, stepIdentity, rewardMultipliers)
    const positionReward = denominator > 0n ? totalReward * numerator / denominator : 0n
    const result: [bigint, bigint] = [positionReward, totalReward]
    return result
  })
}
