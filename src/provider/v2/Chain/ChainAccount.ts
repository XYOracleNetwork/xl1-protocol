import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../../payload/index.ts'
import type { TransactionFeesBigInt } from '../../../transaction/index.ts'

export interface ChainAccountViewer {
  address: Address
  chain: Address
  balance(): Promisable<bigint>
  history(limit?: number, previous?: Hash): Promisable<Transfer[]>
}

export interface ChainAccountProvider extends ChainAccountViewer {
  transfer(
    to: Address,
    amount: bigint,
    options?: {
      fees?: TransactionFeesBigInt
    }
  ): Promisable<Hash>
}
