import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { Provider } from '../Provider.ts'
import type { HydratedTransactionValidationError } from '../validation/index.ts'
import type { SignedHydratedTransaction, SignedHydratedTransactionWithHashMeta } from '../zod/index.ts'
import {
  ChainQualificationZod, ChainQualifiedHeadConfigZod, ChainQualifiedRangeConfigZod,
} from '../zod/index.ts'

export const TransactionValidationQualificationZod = ChainQualificationZod
export type TransactionValidationQualification = z.infer<typeof TransactionValidationQualificationZod>
export const isTransactionValidationQualification = zodIsFactory(TransactionValidationQualificationZod)

export const TransactionValidationConfigFieldsZod = z.object({
  value: z.boolean().optional(),
  state: z.boolean().optional(),
})

export const TransactionValidationConfigZod = z.union([
  TransactionValidationConfigFieldsZod.extend(ChainQualifiedHeadConfigZod.shape),
  TransactionValidationConfigFieldsZod.extend(ChainQualifiedRangeConfigZod.shape),
  TransactionValidationConfigFieldsZod,
  z.object({}),
])

export type TransactionValidationConfig = z.infer<typeof TransactionValidationConfigZod>
export const isTransactionValidationConfig = zodIsFactory(TransactionValidationConfigZod)

export interface TransactionValidationViewerMethods {
  qualifiedValidateTransactions(
    blocks: SignedHydratedTransaction[],
    config?: TransactionValidationConfig
  ): Promisable<[(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[], TransactionValidationQualification]>
}

export const TransactionValidationViewerMoniker = 'TransactionValidationViewer' as const
export type TransactionValidationViewerMoniker = typeof TransactionValidationViewerMoniker

/**
 * Checks if transactions are valid (currently valid) according to protocol rules.
 * In the case that they are not valid, they may still become valid in the future.
 */

export interface TransactionValidationViewer extends TransactionValidationViewerMethods, Provider<TransactionValidationViewerMoniker> {
  qualifiedValidateTransaction(
    block: SignedHydratedTransaction,
    config?: TransactionValidationConfig
  ): Promisable<[HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta, TransactionValidationQualification]>

  validateTransaction(
    block: SignedHydratedTransaction,
    config?: TransactionValidationConfig
  ): Promisable<HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta>

  validateTransactions(
    blocks: SignedHydratedTransaction[],
    config?: TransactionValidationConfig
  ): Promisable<(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[]>
}
