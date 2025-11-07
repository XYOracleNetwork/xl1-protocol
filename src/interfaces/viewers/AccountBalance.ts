import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Signed } from '@xyo-network/boundwitness-model'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { XL1BlockRange } from '../../model/index.ts'
import type { Transfer } from '../../payload/index.ts'
import type { TransactionBoundWitness } from '../../transaction/index.ts'
import type { AttoXL1 } from '../../xl1/index.ts'

export type AccountBalanceHistoryItem = [
  Signed<BlockBoundWitness> /* block */,
  Signed<TransactionBoundWitness> | null,
  Transfer, /* the actual transfer payload */
]

export interface AccountBalancesViewInterface {
  accountBalances(address: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
  accountBalancesHistories(address: Address[]): Promisable<Partial<Record<Address, AccountBalanceHistoryItem[]>>>
}

export interface AccountBalanceViewInterface {
  accountBalance(address: Address): Promisable<AttoXL1>
  accountBalanceHistory(address: Address, range?: XL1BlockRange): Promisable<AccountBalanceHistoryItem[]>
}
