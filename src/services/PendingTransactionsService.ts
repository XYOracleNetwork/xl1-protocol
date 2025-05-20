import type { Hash } from '@xylabs/hex'

import type { HydratedTransaction } from '#transaction'

import type { Service } from './Service.ts'

export interface PendingTransactionsService extends Service {
  getPendingTransactions(head: Hash, limit: number, timeout?: number): Promise<HydratedTransaction[]>
}
