import type { Hash } from '@xylabs/hex'

import type { SignedHydratedTransaction } from '../transaction/index.ts'
import type { Service } from './Service.ts'

export interface PendingTransactionsService extends Service {
  getPendingTransactions(head: Hash, limit: number, timeout?: number): Promise<SignedHydratedTransaction[]>
}
