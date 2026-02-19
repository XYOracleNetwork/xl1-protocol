import type { Hash, Promisable } from '@xylabs/sdk-js'
import { ZERO_HASH } from '@xylabs/sdk-js'
import type {
  BoundWitness,
  Payload,
  Schema,
  WithHashMeta,
} from '@xyo-network/sdk-js'
import { isAnyPayload } from '@xyo-network/sdk-js'
import type { HydratedBoundWitnessValidationFunction, HydratedBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'
import { HydratedBoundWitnessValidationError } from '@xyo-network/xl1-protocol'

function getPayloadsFromPayloadArray(payloads: WithHashMeta<Payload>[], hashes: Hash[]): (WithHashMeta<Payload> | undefined)[] {
  return hashes.map(hash => payloads.find(payload => payload._hash === hash || payload._dataHash === hash))
}

export const BoundWitnessReferencesValidator

  = <T extends BoundWitness = BoundWitness>(allowedSchemas?: Schema[]): HydratedBoundWitnessValidationFunction<T> => (
    [bw, payloadSet]: HydratedBoundWitnessWithHashMeta<T>,
  // eslint-disable-next-line complexity
  ): Promisable<HydratedBoundWitnessValidationError[]> => {
    const errors: HydratedBoundWitnessValidationError[] = []
    try {
      const payloads = getPayloadsFromPayloadArray(payloadSet, bw.payload_hashes)
      if (payloads.length !== bw.payload_hashes.length) {
        errors.push(new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], 'unable to locate payloads'))
      }

      // check if payloads are valid and if their schemas match the declared schemas
      for (let payload of payloads) {
        if (isAnyPayload(payload)) {
          const payloadHashIndex = bw.payload_hashes.indexOf(payload._hash)
          const payloadDataHashIndex = bw.payload_hashes.indexOf(payload._dataHash)
          const payloadIndex = Math.max(payloadHashIndex, payloadDataHashIndex)
          if (payloadIndex === -1) {
            errors.push(new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], 'payload hash not found'))
          }

          const declaredSchema = bw.payload_schemas[payloadIndex]
          if (declaredSchema !== payload.schema) {
            errors.push(new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], 'mismatched schema'))
          }

          if (allowedSchemas && !allowedSchemas.includes(payload.schema)) {
            errors.push(new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], `disallowed schema [${payload.schema}]`))
          }
        } else {
          errors.push(new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], 'invalid payload'))
        }
      }
    } catch (ex) {
      const error = new HydratedBoundWitnessValidationError(bw?._hash ?? ZERO_HASH, [bw, payloadSet], `validation excepted: ${ex}`)
      error.cause = ex
      errors.push(error)
    }
    return errors
  }
