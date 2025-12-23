import type { NetworkStakeStepRewardsByStepViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakingStepRewardsByStepViewerRpcNamespace = 'networkStakingStepRewardsByStepViewer' as const
export type NetworkStakingStepRewardsByStepViewerRpcNamespace = typeof NetworkStakingStepRewardsByStepViewerRpcNamespace

export type NetworkStakingStepRewardsByStepViewerMethodName = MethodName<NetworkStakeStepRewardsByStepViewerMethods>
export type NetworkStakingStepRewardsByStepViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByStepViewerRpcNamespace,
  NetworkStakingStepRewardsByStepViewerMethodName>
export type NetworkStakingStepRewardsByStepViewerRpcMethodHandlers = {
  [K in NetworkStakingStepRewardsByStepViewerMethodName as NetworkStakingStepRewardsByStepViewerRpcMethodName]: (
    params: Parameters<NetworkStakeStepRewardsByStepViewerMethods[K]>,
  ) => ReturnType<NetworkStakeStepRewardsByStepViewerMethods[K]>
}
