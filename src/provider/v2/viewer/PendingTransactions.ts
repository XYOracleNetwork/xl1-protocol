import type { Address, Hash } from '@xylabs/hex'

import type { HydratedTransaction } from '../../../transaction/index.ts'
import type { QueueViewer } from '../QueueProvider.ts'
import type { Viewer } from './Viewer.ts'

export interface ChainPendingTransactionsViewer extends Viewer<Address> {
  chain: Address
  pendingTransactions(): Promise<QueueViewer<Hash, HydratedTransaction>>
}
