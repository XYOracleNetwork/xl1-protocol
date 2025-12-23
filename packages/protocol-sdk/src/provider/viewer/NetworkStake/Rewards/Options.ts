import type { Address } from '@xylabs/sdk-js'
import type { BlockRange, StepIdentity } from '@xyo-network/xl1-protocol'

export interface NetworkStakeStepRewardsRangeOptions {
  range?: BlockRange
}

export interface NetworkStakeStepRewardsByStepViewerOptions extends NetworkStakeStepRewardsRangeOptions {
  steps?: StepIdentity[]
}

export interface NetworkStakeStepRewardsByStakerViewerOptions extends NetworkStakeStepRewardsRangeOptions {
  stakers?: Address[]
}

export interface NetworkStakeStepRewardsByPositionViewerOptions extends NetworkStakeStepRewardsRangeOptions {
  positions?: number[]
}
