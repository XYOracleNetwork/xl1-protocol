import { type NetworkStakeStepRewardsByPositionViewer, NetworkStakeStepRewardsByPositionViewerMoniker } from '@xyo-network/xl1-protocol'

import { JsonRpcNetworkStakeStepRewardsByPositionViewerMethods } from './JsonRpcNetworkStakeStepRewardsByPositionViewerMethods.ts'

export class JsonRpcNetworkStakeStepRewardsByPositionViewer extends JsonRpcNetworkStakeStepRewardsByPositionViewerMethods
  implements NetworkStakeStepRewardsByPositionViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByPositionViewerMoniker
  static readonly monikers = [NetworkStakeStepRewardsByPositionViewerMoniker] as const
}
