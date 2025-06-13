import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedTransaction, TransactionBoundWitness } from '../../transaction/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

/**
 * A function that validates a hydrated transaction.
 * @param bw The hydrated transaction to validate.
 * @param chainId The chain ID to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionValidatorFunction<T extends TransactionBoundWitness = TransactionBoundWitness> = (
  hydratedTransaction: HydratedTransaction<T>,
  chainId?: Address,
) => Promisable<HydratedTransactionValidationError[]>
