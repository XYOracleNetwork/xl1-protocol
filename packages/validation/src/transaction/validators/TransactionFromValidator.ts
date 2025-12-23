import { asAddress, ZERO_HASH } from '@xylabs/sdk-js'
import { addressesContains } from '@xyo-network/boundwitness-validator'
import type { HydratedTransactionValidationFunction, HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError } from '@xyo-network/xl1-protocol'

export const TransactionFromValidator: HydratedTransactionValidationFunction = (
  tx: HydratedTransactionWithHashMeta,
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    const from = asAddress(tx[0].from)
    if (from === undefined)errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      'Transaction from is not a valid address',
    ))
    else if (!addressesContains(tx[0], from)) errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      'Transaction from address must be listed in addresses',
    ))
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      `Failed TransactionFromValidator: ${ex}`,
      ex,
    ))
  }
  return errors
}
