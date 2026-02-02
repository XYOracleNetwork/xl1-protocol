import type { NetworkStakeViewerMethods } from '@xyo-network/xl1-protocol'

import type { MethodName, RpcMethodName } from './RpcMethodName.ts'

export const NetworkStakeViewerRpcNamespace = 'networkStakeViewer' as const
export type NetworkStakeViewerRpcNamespace = typeof NetworkStakeViewerRpcNamespace

export type NetworkStakeViewerMethodName = MethodName<NetworkStakeViewerMethods>
export type NetworkStakeViewerRpcMethodName = RpcMethodName<NetworkStakeViewerRpcNamespace, NetworkStakeViewerMethodName>

// Map each Network Stake RPC method string to the corresponding function type from NetworkStakeViewer
export type NetworkStakeViewerRpcMethodHandlers = {
  [K in NetworkStakeViewerMethodName as NetworkStakeViewerRpcMethodName]: (
    params: Parameters<NetworkStakeViewerMethods[K]>,
  ) => ReturnType<NetworkStakeViewerMethods[K]>
}
