import type { SignedHydratedTransaction } from '../../zod/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class HydratedTransactionValidationError extends ValidationError<SignedHydratedTransaction> {}

export const isHydratedTransactionValidationError = (
  error: unknown,
): error is HydratedTransactionValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === HydratedTransactionValidationError.constructor.name
  )
}
