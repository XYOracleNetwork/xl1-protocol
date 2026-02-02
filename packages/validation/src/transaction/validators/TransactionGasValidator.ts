import { hexToBigInt, ZERO_HASH } from '@xylabs/sdk-js'
import type {
  HydratedTransactionValidationFunction,
  TransactionFeesBigInt, TransactionFeesHex,
} from '@xyo-network/xl1-protocol'
import {
  AttoXL1,
  HydratedTransactionValidationError,
  minTransactionFees,
} from '@xyo-network/xl1-protocol'

export const TransactionGasValidator: HydratedTransactionValidationFunction = (
  context,
  tx,
// eslint-disable-next-line complexity
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    if (tx?.[0].fees === undefined) {
      errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        'Missing fees',
      ))
    } else {
      const {
        base, gasLimit, gasPrice, priority,
      } = parseFees(tx[0].fees)

      if (base === undefined) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        'fees.base must be defined and a valid number',
      ))
      else if (base < minTransactionFees.base) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        `fees.base must be >= ${minTransactionFees.base}`,
      ))

      if (gasLimit === undefined) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        'fees.gasLimit must be defined and a valid number',
      ))
      else if (gasLimit < minTransactionFees.gasLimit) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        `fees.gasLimit must be >= ${minTransactionFees.gasLimit}`,
      ))

      if (gasPrice === undefined) errors.push(
        new HydratedTransactionValidationError(
          tx?.[0]?._hash ?? ZERO_HASH,
          tx,
          'fees.gasPrice must be defined and a valid number',
        ),
      )
      else if (gasPrice < minTransactionFees.gasPrice) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        `fees.gasPrice must be >= ${minTransactionFees.gasPrice}`,
      ))

      if (priority === undefined) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        'fees.priority must be defined and a valid number',
      ))
      else if (priority < minTransactionFees.priority) errors.push(new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        `fees.priority must be >= ${minTransactionFees.priority}`,
      ))
    }
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(
      tx?.[0]?._hash ?? ZERO_HASH,
      tx,
      `Failed TransactionGasValidator: ${ex}`,
      ex,
    ))
  }
  return errors
}

const parseFees = (fees: TransactionFeesHex): Partial<TransactionFeesBigInt> => {
  const ret: Partial<TransactionFeesBigInt> = {}
  const {
    base, gasLimit, gasPrice, priority,
  } = fees
  if (base !== undefined) ret.base = AttoXL1(hexToBigInt(base))
  if (gasLimit !== undefined) ret.gasLimit = AttoXL1(hexToBigInt(gasLimit))
  if (gasPrice !== undefined) ret.gasPrice = AttoXL1(hexToBigInt(gasPrice))
  if (priority !== undefined) ret.priority = AttoXL1(hexToBigInt(priority))
  return ret
}
