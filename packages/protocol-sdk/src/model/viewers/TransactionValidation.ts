import { type Promisable } from '@xylabs/sdk-js'
import { zodIsFactory } from '@xylabs/zod'
import { type HydratedTransaction, type ValidationError } from '@xyo-network/xl1-protocol'
import type { z } from 'zod'

import type { Provider } from '../Provider.ts'
import { ChainQualificationZod, ChainQualifiedConfigZod } from '../zod/index.ts'

export const TransactionValidationQualificationZod = ChainQualificationZod
export type TransactionValidationQualification = z.infer<typeof TransactionValidationQualificationZod>
export const isTransactionValidationQualification = zodIsFactory(TransactionValidationQualificationZod)

export const TransactionValidationConfigZod = ChainQualifiedConfigZod
export type TransactionValidationConfig = z.infer<typeof TransactionValidationConfigZod>
export const isTransactionValidationConfig = zodIsFactory(TransactionValidationConfigZod)

export interface TransactionValidationViewerMethods {
  qualifiedValidateTransactions(
    transactions: HydratedTransaction[],
    config?: TransactionValidationConfig
  ): Promisable<[ValidationError[][], TransactionValidationQualification]>
}

export const TransactionValidationViewerMoniker = 'TransactionValidationViewer' as const
export type TransactionValidationViewerMoniker = typeof TransactionValidationViewerMoniker

export interface TransactionValidationViewer extends TransactionValidationViewerMethods, Provider<TransactionValidationViewerMoniker> {
  qualifiedValidateTransaction(
    transaction: HydratedTransaction,
    config?: TransactionValidationConfig
  ): Promisable<[ValidationError[], TransactionValidationQualification]>
  validateTransaction(transaction: HydratedTransaction[], config?: TransactionValidationConfig): Promisable<ValidationError[]>
  validateTransactions(transactions: HydratedTransaction[], config?: TransactionValidationConfig): Promisable<ValidationError[][]>
}
