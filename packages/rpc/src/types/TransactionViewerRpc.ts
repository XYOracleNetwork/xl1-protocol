import type { TransactionViewerMethods } from '@xyo-network/xl1-protocol'

export type TransactionViewerMethodName = keyof TransactionViewerMethods

export type TransactionViewerRpcMethodName = `transactionViewer_${TransactionViewerMethodName}`

export type TransactionViewerRpcMethodHandlers = {
  [K in TransactionViewerMethodName as `transactionViewer_${K}`]: (
    params: Parameters<TransactionViewerMethods[K]>,
  ) => ReturnType<TransactionViewerMethods[K]>
}
