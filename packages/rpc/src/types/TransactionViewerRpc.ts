import type { TransactionViewerMethods } from '@xyo-network/xl1-protocol'

export type TransactionViewerMethodName = keyof TransactionViewerMethods

export type TransactionViewerRpcMethodName = `transactionViewer_${TransactionViewerMethodName}`

// doing a pick to remove items that are still being used (deprecated)  in XyoViewer

export type TransactionViewerRpcMethodHandlers = {
  [K in keyof Pick<TransactionViewerMethods, 'byHash'> as `transactionViewer_${K}`]: (
    params: Parameters<Pick<TransactionViewerMethods, 'byHash'>[K]>,
  ) => ReturnType<Pick<TransactionViewerMethods, 'byHash'>[K]>
}
