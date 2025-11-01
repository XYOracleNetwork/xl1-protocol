import type { Address } from '@xylabs/hex'

import type { BlockRange, StepIdentity } from '../../../model/index.ts'

export interface RewardsRangeOptions {
  range?: BlockRange
}

export interface RewardsByStepViewerOptions extends RewardsRangeOptions {
  steps?: StepIdentity[]
}

export interface RewardsByStakerViewerOptions extends RewardsRangeOptions {
  stakers?: Address[]
}

export interface RewardsByPositionViewerOptions extends RewardsRangeOptions {
  positions?: number[]
}
