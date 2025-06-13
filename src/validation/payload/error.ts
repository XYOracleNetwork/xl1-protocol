import { isAnyPayload, type Payload } from '@xyo-network/payload-model'

import { type HydratedBlock, isHydratedBlock } from '../../block/index.ts'
import { isValidationError, type ValidationError } from '../error.ts'

export interface InBlockPayloadValidationError extends ValidationError<Payload> {
  block: HydratedBlock
}

export const isInBlockPayloadValidationError = (
  error: unknown,
): error is InBlockPayloadValidationError => {
  if (!isValidationError(error)) return false
  const { block, value } = error as InBlockPayloadValidationError
  return (
    isAnyPayload(value) && isHydratedBlock(block)
  )
}
