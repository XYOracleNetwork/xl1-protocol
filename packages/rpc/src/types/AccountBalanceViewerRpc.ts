import type { AccountBalanceViewerMethods } from '@xyo-network/xl1-protocol-sdk'

export type AccountBalanceViewerMethodName = keyof AccountBalanceViewerMethods

export type AccountBalanceViewerRpcMethodName = `accountBalanceViewer_${AccountBalanceViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from AccountBalanceViewer
export type AccountBalanceViewerRpcMethodHandlers = {
  [K in AccountBalanceViewerMethodName as `accountBalanceViewer_${K}`]: (
    params: Parameters<AccountBalanceViewerMethods[K]>,
  ) => ReturnType<AccountBalanceViewerMethods[K]>
}
