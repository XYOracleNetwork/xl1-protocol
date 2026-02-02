import type { MempoolViewerMethods } from '@xyo-network/xl1-protocol'

import type { MempoolViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromMempoolViewer = (viewer: MempoolViewerMethods): MempoolViewerRpcMethodHandlers => {
  return {
    mempoolViewer_pendingBlocks: params => viewer.pendingBlocks(...params ?? []),
    mempoolViewer_pendingTransactions: params => viewer.pendingTransactions(...params ?? []),
  }
}
