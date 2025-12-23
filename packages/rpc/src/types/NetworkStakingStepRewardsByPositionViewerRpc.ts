import type { NetworkStakeStepRewardsByPositionViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakingStepRewardsByPositionViewerRpcNamespace = 'networkStakingStepRewardsByPositionViewer' as const
export type NetworkStakingStepRewardsByPositionViewerRpcNamespace = typeof NetworkStakingStepRewardsByPositionViewerRpcNamespace

export type NetworkStakingStepRewardsByPositionViewerMethodName = MethodName<NetworkStakeStepRewardsByPositionViewerMethods>
export type NetworkStakingStepRewardsByPositionViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByPositionViewerRpcNamespace,
  NetworkStakingStepRewardsByPositionViewerMethodName>

export type NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers = {
  [K in NetworkStakingStepRewardsByPositionViewerMethodName as NetworkStakingStepRewardsByPositionViewerRpcMethodName]: (
    params: Parameters<NetworkStakeStepRewardsByPositionViewerMethods[K]>,
  ) => ReturnType<NetworkStakeStepRewardsByPositionViewerMethods[K]>
}
