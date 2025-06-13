import { isAnyPayload, type Payload } from '@xyo-network/payload-model'

import { type HydratedBlock, isHydratedBlock } from '../../block/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class InBlockPayloadValidationError extends ValidationError<Payload> {
  block: HydratedBlock
  constructor(block: HydratedBlock, cause: Payload, message?: string) {
    super(cause, message)
    this.block = block
  }

  override toJson() {
    return {
      ...super.toJson(),
      block: JSON.stringify(this.block),
    }
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
