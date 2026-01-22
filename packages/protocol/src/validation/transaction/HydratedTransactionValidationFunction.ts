import type { Promisable } from '@xylabs/sdk-js'

import type { HydratedTransactionWithHashMeta } from '../../zod/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

/**
 * A function that validates a hydrated transaction.
 * @param bw The hydrated transaction to validate.
 * @param context The context to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionValidationFunction<TContext extends {} = {}> = (
  hydratedTransaction: HydratedTransactionWithHashMeta,
  context?: TContext,
) => Promisable<HydratedTransactionValidationError[]>
