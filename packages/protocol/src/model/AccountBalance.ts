import { type Address, type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/sdk-js'
import { z } from 'zod'

import { BlockBoundWitnessZod } from '../block/index.ts'
import { WithHashMetaZod } from '../payload/index.ts'
import type { Provider } from '../provider/index.ts'
import { TransactionBoundWitnessZod } from '../transaction/index.ts'
import { TransferZod } from '../TransferPayload.ts'
import type { AttoXL1 } from '../xl1/index.ts'
import type { ChainQualified } from './ChainQualification.ts'
import { ChainQualificationZod, ChainQualifiedConfigZod } from './ChainQualification.ts'

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
export const isAccountBalanceConfig = zodIsFactory(AccountBalanceConfigZod)

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
