import type { Promisable } from '@xylabs/promise'

import type { RewardsByPositionViewer } from './RewardsByPositionViewer.ts'
import type { RewardsByStakerViewer } from './RewardsByStakerViewer.ts'
import type { RewardsByStepViewer } from './RewardsByStepViewer.ts'
import type { RewardsTotalViewer } from './RewardsTotalViewer.ts'

export interface StepRewardsViewerMethods {}

export interface StepRewardsViewer extends StepRewardsViewerMethods {
  position(): Promisable<RewardsByPositionViewer>
  staker(): Promisable<RewardsByStakerViewer>
  step(): Promisable<RewardsByStepViewer>
  total(): Promisable<RewardsTotalViewer>
}
