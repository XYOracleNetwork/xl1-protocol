import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta } from '../model/index.ts'
import {
  ChainQualificationZod, ChainQualifiedHeadConfigZod, ChainQualifiedRangeConfigZod,
} from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { HydratedTransactionValidationError } from '../validation/index.ts'

export const TransactionInvalidationQualificationZod = ChainQualificationZod
export type TransactionInvalidationQualification = z.infer<typeof TransactionInvalidationQualificationZod>
export const isTransactionInvalidationQualification = zodIsFactory(TransactionInvalidationQualificationZod)

export const TransactionInvalidationConfigFieldsZod = z.object({
  state: z.boolean().optional(),
  value: z.boolean().optional(),
})

export const TransactionInvalidationConfigZod = z.union([
  TransactionInvalidationConfigFieldsZod.extend(ChainQualifiedHeadConfigZod.shape),
  TransactionInvalidationConfigFieldsZod.extend(ChainQualifiedRangeConfigZod.shape),
  TransactionInvalidationConfigFieldsZod,
  z.object({}),
])

export type TransactionInvalidationConfig = z.infer<typeof TransactionInvalidationConfigZod>
export const isTransactionInvalidationConfig = zodIsFactory(TransactionInvalidationConfigZod)

/**
 * Checks if transactions are invalid (impossible to ever become valid) according to protocol rules.
 */

export interface TransactionInvalidationViewerMethods {
  qualifiedInvalidateTransactions(
    blocks: SignedHydratedTransaction[],
    config?: TransactionInvalidationConfig
  ): Promisable<[(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[], TransactionInvalidationQualification]>
}

export const TransactionInvalidationViewerMoniker = 'TransactionInvalidationViewer' as const
export type TransactionInvalidationViewerMoniker = typeof TransactionInvalidationViewerMoniker

export interface TransactionInvalidationViewer extends TransactionInvalidationViewerMethods, Provider<TransactionInvalidationViewerMoniker> {
  invalidateTransaction(
    block: SignedHydratedTransaction,
    config?: TransactionInvalidationConfig
  ): Promisable<HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta>

  invalidateTransactions(
    blocks: SignedHydratedTransaction[],
    config?: TransactionInvalidationConfig
  ): Promisable<(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[]>

  qualifiedInvalidateTransaction(
    block: SignedHydratedTransaction,
    config?: TransactionInvalidationConfig
  ): Promisable<[HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta, TransactionInvalidationQualification]>
}
