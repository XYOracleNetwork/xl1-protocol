import type { TransactionViewerMethods } from '@xyo-network/xl1-protocol'

import type { TransactionViewerRpcMethodHandlers } from '../index-node.ts'

export const rpcMethodHandlersFromTransactionViewer = (viewer: TransactionViewerMethods): TransactionViewerRpcMethodHandlers => {
  return { transactionViewer_byHash: params => viewer.byHash(...params ?? []) }
}
