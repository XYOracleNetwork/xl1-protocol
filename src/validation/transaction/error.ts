import { type HydratedTransactionWithHashStorageMeta, isHydratedTransaction } from '../../transaction/index.ts'
import { isValidationError, type ValidationError } from '../error.ts'

export interface HydratedTransactionValidationError extends ValidationError<HydratedTransactionWithHashStorageMeta> {}

export const isHydratedTransactionValidationError = (
  error: unknown,
): error is HydratedTransactionValidationError => {
  return (
    isValidationError(error) && isHydratedTransaction(error)
  )
}
