import type { Promisable } from '@xylabs/promise'

import type { StepRewardsViewer } from './StepRewardsViewer.ts'

export interface NetworkStakeViewerMethods {
  /** @returns the active stake and the number of active validators [active, block] */
  active(blockNumber?: number): Promisable<[bigint, number]>
}

export interface NetworkStakeViewer extends NetworkStakeViewerMethods {
  stepRewards(): Promisable<StepRewardsViewer>
}
