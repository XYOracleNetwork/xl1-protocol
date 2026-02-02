import type { Address, Promisable } from '@xylabs/sdk-js'
import type { Signed } from '@xyo-network/boundwitness-model'

import type { XL1BlockRange } from '../model/index.ts'
import type { Transfer } from '../payload/index.ts'
import type { Provider } from '../Provider.ts'
import type { AttoXL1 } from '../xl1/index.ts'
import type { BlockBoundWitness, TransactionBoundWitness } from '../zod/index.ts'

export type TransferBalanceHistoryItem = [
  Signed<BlockBoundWitness> /* block */,
  Signed<TransactionBoundWitness> | null,
  Transfer, /* the actual transfer payload */
]
export type TransferPair = [Address, Address]

export interface TransferBalancesViewerMethods {
  transferBalances(address: Address[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferBalancesHistories(address: Address[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
  transferPairBalances(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferPairBalancesHistories(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
}

export const TransferBalanceViewerMoniker = 'TransferBalanceViewer' as const
export type TransferBalanceViewerMoniker = typeof TransferBalanceViewerMoniker

export interface TransferBalanceViewer extends TransferBalancesViewerMethods, Provider<TransferBalanceViewerMoniker> {
  transferBalance(address: Address): Promisable<AttoXL1>
  transferBalanceHistory(address: Address, range?: XL1BlockRange): Promisable<TransferBalanceHistoryItem[]>
  transferPairBalance(address: TransferPair): Promisable<AttoXL1>
  transferPairBalanceHistory(address: TransferPair): Promisable<TransferBalanceHistoryItem[]>
}
