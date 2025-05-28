import type { SignedHydratedTransaction } from '../../../transaction/index.ts'
import type { BlockViewer } from './Block.ts'
import type { Viewer } from './Viewer.ts'

export interface TransactionViewer extends Viewer<SignedHydratedTransaction> {
  block: BlockViewer
}
