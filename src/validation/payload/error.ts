import type { Hash } from '@xylabs/hex'
import { isAnyPayload, type Payload } from '@xyo-network/payload-model'

import { type HydratedBlock, isHydratedBlock } from '../../block/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class InBlockPayloadValidationError extends ValidationError<Payload> {
  block: HydratedBlock
  constructor(cause: Hash, block: HydratedBlock, value: Payload, message?: string, errors?: Error[]) {
    super(cause, value, message, errors)
    this.block = block
  }
}

export const isInBlockPayloadValidationError = (
  error: unknown,
): error is InBlockPayloadValidationError => {
  if (!isValidationError(error)) return false
  const { block, cause } = error as InBlockPayloadValidationError
  return (
    isAnyPayload(cause) && isHydratedBlock(block)
  )
}
