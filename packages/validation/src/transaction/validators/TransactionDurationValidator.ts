import { ZERO_HASH } from '@xylabs/sdk-js'
import type { HydratedTransactionValidationFunction, HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError } from '@xyo-network/xl1-protocol'

export const TransactionDurationValidator: HydratedTransactionValidationFunction = (
  tx: HydratedTransactionWithHashMeta,
// eslint-disable-next-line complexity
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    const { exp, nbf } = tx[0]
    if (nbf < 0) errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'Transaction nbf must be positive'))

    if (exp < 0) errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'Transaction exp must be positive'))
    if (exp <= nbf) errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'Transaction exp must greater than nbf'))
    if (exp - nbf > 10_000) errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      'Transaction exp must not be too far in the future',
    ))
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      `Failed TransactionDurationValidator: ${ex}`,
      ex,
    ))
  }

  return errors
}
