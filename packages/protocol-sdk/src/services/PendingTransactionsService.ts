import type { Hash } from '@xylabs/sdk-js'
import type { SignedHydratedTransaction } from '@xyo-network/xl1-protocol'

export interface PendingTransactionsService {
  getPendingTransactions(head: Hash, limit: number, timeout?: number): Promise<SignedHydratedTransaction[]>
}
