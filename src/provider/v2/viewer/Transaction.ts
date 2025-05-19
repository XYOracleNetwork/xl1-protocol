import type { SignedHydratedTransaction } from '../../../protocol/HydratedTransaction.ts'
import type { BlockViewer } from './Block.ts'

export interface TransactionViewer {
  block: BlockViewer
  value: SignedHydratedTransaction
}
