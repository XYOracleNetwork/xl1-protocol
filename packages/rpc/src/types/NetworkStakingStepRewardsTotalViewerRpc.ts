import type { NetworkStakeStepRewardsTotalViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakingStepRewardsTotalViewerRpcNamespace = 'networkStakingStepRewardsTotalViewer' as const
export type NetworkStakingStepRewardsTotalViewerRpcNamespace = typeof NetworkStakingStepRewardsTotalViewerRpcNamespace

export type NetworkStakingStepRewardsTotalViewerMethodName = MethodName<NetworkStakeStepRewardsTotalViewerMethods>
export type NetworkStakingStepRewardsTotalViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsTotalViewerRpcNamespace,
  NetworkStakingStepRewardsTotalViewerMethodName>
export type NetworkStakingStepRewardsTotalViewerRpcMethodHandlers = {
  [K in NetworkStakingStepRewardsTotalViewerMethodName as NetworkStakingStepRewardsTotalViewerRpcMethodName]: (
    params: Parameters<NetworkStakeStepRewardsTotalViewerMethods[K]>,
  ) => ReturnType<NetworkStakeStepRewardsTotalViewerMethods[K]>
}
