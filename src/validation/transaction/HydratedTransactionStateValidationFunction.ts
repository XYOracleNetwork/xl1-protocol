import type { Promisable } from '@xylabs/promise'
import type { ReadArchivist } from '@xyo-network/archivist-model'

import type { Chain } from '../../model.ts'
import type { HydratedTransactionWithStorageMeta, TransactionBoundWitness } from '../../transaction/index.ts'
import type { HydratedTransactionValidationError } from './error.ts'

/**
 * A function that validates a hydrated transaction against chain state.
 * @param hydratedTransaction The hydrated transaction to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionStateValidationFunction<T extends TransactionBoundWitness = TransactionBoundWitness> = (
  hydratedTransaction: HydratedTransactionWithStorageMeta<T>,
  chainId: Chain,
  archivist: ReadArchivist,
) => Promisable<HydratedTransactionValidationError[]>
