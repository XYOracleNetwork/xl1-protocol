import type { Address, Hash } from '@xylabs/hex'

import type { HydratedTransaction } from '../../../transaction/index.ts'
import type { QueueReader } from '../QueueProvider.ts'

export interface ChainPendingTransactionsViewer {
  chain: Address
  pendingTransactions(): Promise<QueueReader<Hash, HydratedTransaction>>
}
