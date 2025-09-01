import type { Hash } from '@xylabs/hex'

import type { SignedHydratedTransaction } from '../transaction/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface PendingTransactionsService extends ServiceInterface {
  getPendingTransactions(head: Hash, limit: number, timeout?: number): Promise<SignedHydratedTransaction[]>
}
