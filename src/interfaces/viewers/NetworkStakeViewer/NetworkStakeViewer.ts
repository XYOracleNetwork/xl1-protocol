import type { Promisable } from '@xylabs/promise'

import type { StepRewardsViewer } from './StepRewardsViewer.ts'

export interface NetworkStakeViewerMethods {
  stake(blockNumber?: number): Promisable<bigint>
}

export interface NetworkStakeViewer extends NetworkStakeViewerMethods {
  stepRewards(): Promisable<StepRewardsViewer>
}
