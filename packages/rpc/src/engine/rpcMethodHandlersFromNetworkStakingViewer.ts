import type { NetworkStakeViewerMethods } from '@xyo-network/xl1-protocol'

import type { NetworkStakeViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromNetworkStakingViewer = (viewer: NetworkStakeViewerMethods): NetworkStakeViewerRpcMethodHandlers => {
  return { networkStakeViewer_active: params => viewer.active(...(params ?? [])) }
}
