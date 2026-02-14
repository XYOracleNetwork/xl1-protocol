import type { Hash, Promisable } from '@xylabs/sdk-js'

import type { SignedHydratedTransaction } from '../model/index.ts'

export interface TransactionViewerMethods {
  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByHash(transactionHash: Hash): Promisable<SignedHydratedTransaction | null>
}
