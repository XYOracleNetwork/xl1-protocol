import type { Address, Hash } from '@xylabs/hex'

import type { SignedHydratedBlock } from '#block'

import type { TransactionViewer } from './Transaction.ts'

export interface BlockViewer {
  chainId: Address
  value: SignedHydratedBlock
  transaction(id: number | Hash): TransactionViewer
}
