import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { WithHashMeta } from '@xyo-network/payload-model'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { XL1BlockRange } from '../../model/index.ts'
import type { Transfer } from '../../payload/index.ts'
import type { TransactionBoundWitness } from '../../transaction/index.ts'
import type { AttoXL1 } from '../../xl1/index.ts'

export type TransferBalanceHistoryItem = [
  WithHashMeta<BlockBoundWitness> /* block */,
  WithHashMeta<TransactionBoundWitness> | null,
  WithHashMeta<Transfer>, /* the actual transfer payload */
]
export type TransferPair = [/* from */ Address, /* to */Address]

export interface TransferBalancesViewInterface {
  transferBalances(address: Address[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferBalancesHistories(address: Address[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
  transferPairBalances(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>
  transferPairBalancesHistories(address: TransferPair[]): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>
}

export interface TransferBalanceViewInterface {
  transferBalance(address: Address): Promisable<AttoXL1>
  transferBalanceHistory(address: Address, range?: XL1BlockRange): Promisable<TransferBalanceHistoryItem[]>
  transferPairBalance(address: TransferPair): Promisable<AttoXL1>
  transferPairBalanceHistory(address: TransferPair): Promisable<TransferBalanceHistoryItem[]>
}
