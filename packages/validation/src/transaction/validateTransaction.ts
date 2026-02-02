import type {
  HydratedTransactionValidationFunction,
  HydratedTransactionValidationFunctionContext,
  HydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { isTransactionBoundWitness } from '@xyo-network/xl1-protocol'

import {
  TransactionDurationValidator,
  TransactionElevationValidator, TransactionFromValidator, TransactionGasValidator, TransactionProtocolValidator,
} from './validators/index.ts'

export async function validateTransaction(
  context: HydratedTransactionValidationFunctionContext,
  tx: HydratedTransactionWithHashMeta,
  additionalValidators?: HydratedTransactionValidationFunction[],
) {
  try {
    if (!isTransactionBoundWitness(tx[0])) {
      return [new Error('failed isTransactionBoundWitness identity check')]
    }

    const validators: HydratedTransactionValidationFunction<HydratedTransactionValidationFunctionContext>[] = [
      TransactionProtocolValidator,
      TransactionDurationValidator,
      TransactionFromValidator,
      TransactionGasValidator,
      TransactionElevationValidator,
      ...(additionalValidators ?? []),
    ]
    return (await Promise.all(validators.map(v => v(context, tx)))).flat()
  } catch (ex) {
    return [(new Error(`Failed TransactionGasValidator: ${ex}`))]
  }
}
