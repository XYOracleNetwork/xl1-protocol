import type { Hash, Promisable } from '@xylabs/sdk-js'

import type { SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta } from '../model/index.ts'
import type { Provider, ProviderMoniker } from '../provider/index.ts'

export interface TransactionViewerMethods {
  byHash(transactionHash: Hash): Promisable<SignedHydratedTransactionWithHashMeta | null>

  /** @deprecated use .byBlockHashAndIndex instead */
  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  /** @deprecated use .byBlockNumberAndIndex instead */
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  /** @deprecated use .byHash instead */
  transactionByHash(transactionHash: Hash): Promisable<SignedHydratedTransaction | null>
}

export const TransactionViewerMoniker = 'TransactionViewer' as const
export type TransactionViewerMoniker = typeof TransactionViewerMoniker

export interface TransactionViewer<TMoniker extends ProviderMoniker = TransactionViewerMoniker> extends TransactionViewerMethods, Provider<TMoniker> {
  byBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransactionWithHashMeta | null>
  byBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransactionWithHashMeta | null>
}
