import { type HydratedTransaction } from '../../transaction/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class HydratedTransactionValidationError extends ValidationError<HydratedTransaction> {}

export const isHydratedTransactionValidationError = (
  error: unknown,
): error is HydratedTransactionValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === HydratedTransactionValidationError.constructor.name
  )
}
