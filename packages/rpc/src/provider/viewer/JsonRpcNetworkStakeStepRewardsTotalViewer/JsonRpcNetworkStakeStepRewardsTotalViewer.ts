import { type NetworkStakeStepRewardsTotalViewer, NetworkStakeStepRewardsTotalViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcNetworkStakeStepRewardsTotalViewerMethods } from './JsonRpcNetworkStakeStepRewardsTotalViewerMethods.ts'

export class JsonRpcNetworkStakeStepRewardsTotalViewer extends
  JsonRpcNetworkStakeStepRewardsTotalViewerMethods implements NetworkStakeStepRewardsTotalViewer {
  static readonly defaultMoniker = NetworkStakeStepRewardsTotalViewerMoniker
  static readonly monikers = [NetworkStakeStepRewardsTotalViewerMoniker] as const
}
