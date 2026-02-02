import { ZERO_HASH } from '@xylabs/sdk-js'
import type { HydratedTransactionValidationFunction } from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError } from '@xyo-network/xl1-protocol'
import { extractElevatedHashes } from '@xyo-network/xl1-protocol-sdk'

export const TransactionElevationValidator: HydratedTransactionValidationFunction = (
  context,
  tx,
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    try {
      extractElevatedHashes(tx)
    } catch {
      errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'Hydrated transaction does not include all script hashes'))
    }
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      `Failed TransactionElevationValidator: ${ex}`,
      ex,
    ))
  }
  return errors
}
