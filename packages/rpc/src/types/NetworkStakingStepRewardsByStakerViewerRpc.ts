import type { NetworkStakeStepRewardsByStakerViewerMethods } from '@xyo-network/xl1-protocol'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakingStepRewardsByStakerViewerRpcNamespace = 'networkStakingStepRewardsByStakerViewer' as const
export type NetworkStakingStepRewardsByStakerViewerRpcNamespace = typeof NetworkStakingStepRewardsByStakerViewerRpcNamespace

export type NetworkStakingStepRewardsByStakerViewerMethodName = MethodName<NetworkStakeStepRewardsByStakerViewerMethods>
export type NetworkStakingStepRewardsByStakerViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByStakerViewerRpcNamespace,
  NetworkStakingStepRewardsByStakerViewerMethodName>
export type NetworkStakingStepRewardsByStakerViewerRpcMethodHandlers = {
  [K in NetworkStakingStepRewardsByStakerViewerMethodName as NetworkStakingStepRewardsByStakerViewerRpcMethodName]: (
    params: Parameters<NetworkStakeStepRewardsByStakerViewerMethods[K]>,
  ) => ReturnType<NetworkStakeStepRewardsByStakerViewerMethods[K]>
}
