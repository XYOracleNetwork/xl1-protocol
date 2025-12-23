import { ZERO_HASH } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { HydratedTransactionValidationFunction, TransactionBoundWitness } from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError } from '@xyo-network/xl1-protocol'
import { TransactionBoundWitnessJsonSchema } from '@xyo-network/xl1-schema'
import type { ValidateFunction } from 'ajv'
import { Ajv } from 'ajv'

const ajv = new Ajv({ allErrors: true, strict: true })

let validate: ValidateFunction<TransactionBoundWitness> | undefined

export const TransactionJsonSchemaValidator: HydratedTransactionValidationFunction = (
  tx,
) => {
  const errors: HydratedTransactionValidationError[] = []
  try {
    if (validate === undefined) validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    if (!validate(PayloadBuilder.omitStorageMeta(tx[0]))) {
      const error = new HydratedTransactionValidationError(
        tx?.[0]?._hash ?? ZERO_HASH,
        tx,
        `failed JSON schema validation: ${ajv.errorsText(validate.errors, { separator: '\n' })}`,
      )
      error.cause = validate.errors
      errors.push(error)
    }
  } catch (ex) {
    errors.push(new HydratedTransactionValidationError(tx?.[0]?._hash ?? ZERO_HASH, tx, 'validation excepted', ex))
  }
  return errors
}
