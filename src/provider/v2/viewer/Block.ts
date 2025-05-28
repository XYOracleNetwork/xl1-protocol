import type { Address, Hash } from '@xylabs/hex'

import type { SignedHydratedBlock } from '../../../block/index.ts'
import type { TransactionViewer } from './Transaction.ts'
import type { Viewer } from './Viewer.ts'

export interface BlockViewer extends Viewer<SignedHydratedBlock> {
  chainId: Address
  transaction(id: number | Hash): TransactionViewer
}
