import { type HydratedTransaction, isHydratedTransaction } from '../../transaction/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class HydratedTransactionValidationError extends ValidationError<HydratedTransaction> {}

export const isHydratedTransactionValidationError = (
  error: unknown,
): error is HydratedTransactionValidationError => {
  return (
    isValidationError(error) && isHydratedTransaction(error)
  )
}
