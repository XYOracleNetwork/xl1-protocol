import type { Promisable } from '@xylabs/sdk-js'

import type { Provider } from '../../../model/index.ts'
import type { NetworkStakeStepRewardsViewer } from './Rewards/index.ts'

export interface NetworkStakeViewerMethods {
  /** @returns the active stake and the number of active validators [active, block] */
  active(blockNumber?: number): Promisable<[bigint, number]>
}

export const NetworkStakeViewerMoniker = 'NetworkStakeViewer' as const
export type NetworkStakeViewerMoniker = typeof NetworkStakeViewerMoniker

export interface NetworkStakeViewer extends NetworkStakeViewerMethods, Provider<NetworkStakeViewerMoniker> {
  stepRewards?: NetworkStakeStepRewardsViewer
}
