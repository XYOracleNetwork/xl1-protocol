import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../payload/index.ts'
import type { AttoXL1 } from '../../xl1/index.ts'

export type TransferBalanceHistoryItem = [Hash /* block */, Hash /* transaction */, Transfer /* the actual transfer payload */]
export type TransferPair = [/* from */ Address, /* to */Address]

export interface TransferBalancesViewInterface {
  transferBalances(address: Address[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferBalancesHistories(address: Address[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
  transferPairBalances(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferPairBalancesHistories(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
}

export interface TransferBalanceViewInterface {
  transferBalance(address: Address): Promisable<AttoXL1>
  transferBalanceHistory(address: Address): Promisable<TransferBalanceHistoryItem[]>
  transferPairBalance(address: TransferPair): Promisable<AttoXL1>
  transferPairBalanceHistory(address: TransferPair): Promisable<TransferBalanceHistoryItem[]>
}
