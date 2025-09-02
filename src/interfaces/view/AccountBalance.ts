import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../payload/index.ts'
import type { AttoXL1 } from '../../xl1/index.ts'

export type AccountBalanceHistoryItem = [Hash /* block */, Hash /* transaction */, Transfer /* the actual transfer payload */]

export interface AccountBalancesViewInterface {
  accountBalanceHistories(address: Address): Promisable<Partial<Record<Address, AccountBalanceHistoryItem[]>>>
  accountBalances(address: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}

export interface AccountBalanceViewInterface {
  accountBalance(address: Address): Promisable<AttoXL1>
  accountBalanceHistory(address: Address): Promisable<AccountBalanceHistoryItem[]>
}
