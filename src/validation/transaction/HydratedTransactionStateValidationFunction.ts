import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { HydratedBoundWitnessWithStorageMeta, ReadArchivist } from '@xyo-network/archivist-model'

import type { TransactionBoundWitness } from '../../protocol/index.ts'

/**
 * A function that validates a hydrated transaction against chain state.
 * @param hydratedTransaction The hydrated transaction to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the transaction is invalid, or an empty array if it is valid.
 */
export type HydratedTransactionStateValidationFunction<T extends TransactionBoundWitness = TransactionBoundWitness> = (
  hydratedTransaction: HydratedBoundWitnessWithStorageMeta<T>,
  chainId: Address,
  archivist: ReadArchivist,
) => Promisable<Error[]>
