import type { Address } from '@xylabs/sdk-js'

import type { BlockRange, StepIdentity } from '../../../model/index.ts'

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
