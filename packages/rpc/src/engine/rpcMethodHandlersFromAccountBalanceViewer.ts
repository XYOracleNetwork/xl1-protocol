import type { AccountBalanceViewerMethods } from '@xyo-network/xl1-protocol-sdk'

import type { AccountBalanceViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromAccountBalanceViewer = (viewer: AccountBalanceViewerMethods): AccountBalanceViewerRpcMethodHandlers => {
  return {
    accountBalanceViewer_qualifiedAccountBalances: params => viewer.qualifiedAccountBalances(...params ?? []),
    accountBalanceViewer_qualifiedAccountBalanceHistories: params => viewer.qualifiedAccountBalanceHistories(...params ?? []),
  }
}
