import type { SignedHydratedTransaction } from '#transaction'

import type { BlockViewer } from './Block.ts'

export interface TransactionViewer {
  block: BlockViewer
  value: SignedHydratedTransaction
}
