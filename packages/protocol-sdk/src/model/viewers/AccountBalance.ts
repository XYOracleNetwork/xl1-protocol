import { type Address, type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { WithHashMetaZod } from '@xyo-network/payload-model'
import {
  type AttoXL1,
  TransferZod,
} from '@xyo-network/xl1-protocol'
import { BlockBoundWitnessZod, TransactionBoundWitnessZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { Provider } from '../Provider.ts'
import type { ChainQualified } from '../zod/index.ts'
import { ChainQualificationZod, ChainQualifiedConfigZod } from '../zod/index.ts'

export const AccountBalanceHistoryItemZod = z.tuple([
  WithHashMetaZod(BlockBoundWitnessZod),
  WithHashMetaZod(TransactionBoundWitnessZod).nullable(),
  WithHashMetaZod(TransferZod),
])

export type AccountBalanceHistoryItem = z.infer<typeof AccountBalanceHistoryItemZod>

export const AccountBalanceQualificationZod = ChainQualificationZod
export type AccountBalanceQualification = z.infer<typeof AccountBalanceQualificationZod>
export const isAccountBalanceQualification = zodIsFactory(AccountBalanceQualificationZod)

export const AccountBalanceConfigZod = ChainQualifiedConfigZod
export type AccountBalanceConfig = z.infer<typeof AccountBalanceConfigZod>
export const isAccountBalanceCOnfig = zodIsFactory(AccountBalanceConfigZod)

export interface AccountBalanceViewerMethods {
  qualifiedAccountBalanceHistories(
    address: Address[],
    config: AccountBalanceConfig
  ): Promisable<ChainQualified<Record<Address, AccountBalanceHistoryItem[]>>>
  qualifiedAccountBalances(address: Address[], config: AccountBalanceConfig): Promisable<ChainQualified<Record<Address, AttoXL1>>>
}

export interface AccountBalanceViewer extends AccountBalanceViewerMethods, Provider<AccountBalanceViewerMoniker> {
  accountBalance(address: Address, config?: AccountBalanceConfig): Promisable<AttoXL1>
  accountBalanceHistories(address: Address[], config?: AccountBalanceConfig): Promisable<Record<Address, AccountBalanceHistoryItem[]>>
  accountBalanceHistory(address: Address, config?: AccountBalanceConfig): Promisable<AccountBalanceHistoryItem[]>
  accountBalances(address: Address[], config?: AccountBalanceConfig): Promisable<Record<Address, AttoXL1>>
}

export const AccountBalanceViewerMoniker = 'AccountBalanceViewer' as const
export type AccountBalanceViewerMoniker = typeof AccountBalanceViewerMoniker
