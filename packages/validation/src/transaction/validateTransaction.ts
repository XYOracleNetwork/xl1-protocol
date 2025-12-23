import type {
  ChainId, HydratedTransactionValidationFunction,
  HydratedTransactionWithHashMeta,
  StepIdentity,
} from '@xyo-network/xl1-protocol'
import { isTransactionBoundWitness } from '@xyo-network/xl1-protocol'

import {
  TransactionDurationValidator,
  TransactionElevationValidator, TransactionFromValidator, TransactionGasValidator, TransactionProtocolValidator,
} from './validators/index.ts'

export type ValidateTransactionContext = {
  chainId?: ChainId
  step?: StepIdentity
}

export async function validateTransaction(
  tx: HydratedTransactionWithHashMeta,
  context?: ValidateTransactionContext,
  additionalValidators: HydratedTransactionValidationFunction[] = [],
) {
  try {
    if (!isTransactionBoundWitness(tx[0])) {
      return [new Error('failed isTransactionBoundWitness identity check')]
    }

    const validators: HydratedTransactionValidationFunction<ValidateTransactionContext>[] = [
      TransactionProtocolValidator,
      TransactionDurationValidator,
      TransactionFromValidator,
      TransactionGasValidator,
      TransactionElevationValidator,
      ...additionalValidators,
    ]
    return (await Promise.all(validators.map(v => v(tx, context)))).flat()
  } catch (ex) {
    return [(new Error(`Failed TransactionGasValidator: ${ex}`))]
  }
}
