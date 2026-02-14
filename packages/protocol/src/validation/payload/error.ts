import type { Hash } from '@xylabs/sdk-js'
import { type Payload } from '@xyo-network/payload-model'

import type { HydratedBlock } from '../../block/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class InBlockPayloadValidationError extends ValidationError<Payload> {
  block: HydratedBlock
  constructor(hash: Hash, block: HydratedBlock, value: Payload, message?: string, cause?: unknown) {
    super(hash, value, message, cause)
    this.block = block
  }
}

export const isInBlockPayloadValidationError = (
  error: unknown,
): error is InBlockPayloadValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === InBlockPayloadValidationError.constructor.name
  )
}
