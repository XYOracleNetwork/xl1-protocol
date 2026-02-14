import type { Promisable } from '@xylabs/sdk-js'

import type { ChainId } from '../../chain/index.ts'
import type { BaseContext, HydratedTransactionWithHashMeta } from '../../model/index.ts'
import type { StepIdentity } from '../../Step/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

export interface HydratedTransactionValidationFunctionContext extends BaseContext {
  chainId: ChainId
  step?: StepIdentity
}

/**
 * A function that validates a hydrated transaction.
 * @param bw The hydrated transaction to validate.
 * @param context The context to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionValidationFunction<TContext extends HydratedTransactionValidationFunctionContext = HydratedTransactionValidationFunctionContext> = (
  context: TContext,
  hydratedTransaction: HydratedTransactionWithHashMeta,
) => Promisable<HydratedTransactionValidationError[]>
