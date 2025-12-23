import type { NetworkStakeStepRewardsViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakingStepRewardsViewerRpcNamespace = 'networkStakingStepRewardsViewer' as const
export type NetworkStakingStepRewardsViewerRpcNamespace = typeof NetworkStakingStepRewardsViewerRpcNamespace

export type NetworkStakingStepRewardsViewerMethodName = MethodName<NetworkStakeStepRewardsViewerMethods>
export type NetworkStakingStepRewardsViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsViewerRpcNamespace, NetworkStakingStepRewardsViewerMethodName>

export type NetworkStakingStepRewardsViewerRpcMethodHandlers = {
  [K in NetworkStakingStepRewardsViewerMethodName]: (
    params: Parameters<NetworkStakeStepRewardsViewerMethods[K]>,
  ) => ReturnType<NetworkStakeStepRewardsViewerMethods[K]>
}
