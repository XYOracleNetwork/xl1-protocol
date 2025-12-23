import { ZERO_HASH } from '@xylabs/sdk-js'
import type {
  ChainId,
  HydratedTransactionValidationFunction,
  HydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError } from '@xyo-network/xl1-protocol'

export const TransactionProtocolValidator: HydratedTransactionValidationFunction = async (
  tx: HydratedTransactionWithHashMeta,
  context?: { chainId?: ChainId },
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    if (context?.chainId !== undefined && tx[0].chain !== context.chainId) {
      errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, `invalid chain id [${context.chainId}, ${tx[0].chain}]`))
    }
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'validation excepted', ex))
  }
  return await Promise.resolve(errors)
}
