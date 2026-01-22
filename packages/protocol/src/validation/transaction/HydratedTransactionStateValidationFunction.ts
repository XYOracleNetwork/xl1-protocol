import type { Promisable } from '@xylabs/sdk-js'
import type { ReadArchivist } from '@xyo-network/archivist-model'

import type { ChainId } from '../../model/index.ts'
import type { HydratedTransactionWithHashMeta, TransactionBoundWitness } from '../../zod/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

/**
 * A function that validates a hydrated transaction against chain state.
 * @param hydratedTransaction The hydrated transaction to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionStateValidationFunction<T extends TransactionBoundWitness = TransactionBoundWitness> = (
  hydratedTransaction: T & HydratedTransactionWithHashMeta,
  chainId: ChainId,
  archivist: ReadArchivist,
) => Promisable<HydratedTransactionValidationError[]>
