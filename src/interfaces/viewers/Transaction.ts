import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { SignedHydratedTransaction } from '../../transaction/index.ts'

export interface TransactionViewInterface {
  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByHash(transactionHash: Hash): Promisable<SignedHydratedTransaction | null>
}
