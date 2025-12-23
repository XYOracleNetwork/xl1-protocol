import { type NetworkStakeStepRewardsByStakerViewer, NetworkStakeStepRewardsByStakerViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcNetworkStakeStepRewardsByStakerViewerMethods } from './JsonRpcNetworkStakeStepRewardsByStakerViewerMethods.ts'

export class JsonRpcNetworkStakeStepRewardsByStakerViewer extends
  JsonRpcNetworkStakeStepRewardsByStakerViewerMethods implements NetworkStakeStepRewardsByStakerViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsByStakerViewerMoniker
  static readonly monikers = [NetworkStakeStepRewardsByStakerViewerMoniker] as const
}
