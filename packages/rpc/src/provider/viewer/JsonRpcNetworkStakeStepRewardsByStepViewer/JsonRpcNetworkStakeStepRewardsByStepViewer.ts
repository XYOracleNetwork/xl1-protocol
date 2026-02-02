import { type NetworkStakeStepRewardsByStepViewer, NetworkStakeStepRewardsByStepViewerMoniker } from '@xyo-network/xl1-protocol'

import { JsonRpcNetworkStakeStepRewardsByStepViewerMethods } from './JsonRpcNetworkStakeStepRewardsByStepViewerMethods.ts'

export class JsonRpcNetworkStakeStepRewardsByStepViewer extends
  JsonRpcNetworkStakeStepRewardsByStepViewerMethods implements NetworkStakeStepRewardsByStepViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByStepViewerMoniker
  static readonly monikers = [NetworkStakeStepRewardsByStepViewerMoniker] as const
}
