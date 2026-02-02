import type { Promisable } from '@xylabs/sdk-js'

import type { BaseContext, ChainId } from '../../model/index.ts'
import type { AccountBalanceViewer, BlockViewer } from '../../viewers/index.ts'
import type { HydratedTransactionWithHashMeta } from '../../zod/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

export interface HydratedTransactionStateValidationFunctionContext extends BaseContext {
  accountBalanceViewer: AccountBalanceViewer
  blockViewer: BlockViewer
  chainId: ChainId
}

/**
 * A function that validates a hydrated transaction against chain state.
 * @param context The context to use for validation.
 * @param hydratedTransaction The hydrated transaction to validate.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionStateValidationFunction = (
  context: HydratedTransactionStateValidationFunctionContext,
  hydratedTransaction: HydratedTransactionWithHashMeta,
) => Promisable<HydratedTransactionValidationError[]>
