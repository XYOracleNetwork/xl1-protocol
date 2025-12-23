import type { Hash } from '@xylabs/sdk-js'
import type {
  BlockBoundWitness,
  ChainId,
  HydratedBlock,
} from '@xyo-network/xl1-protocol'
import { isValidationError, ValidationError } from '@xyo-network/xl1-protocol'

export class BlockValidationError extends ValidationError<BlockBoundWitness> {}

export const isBlockValidationError = (
  error: unknown,
): error is BlockValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === BlockValidationError.constructor.name
  )
}

export class HydratedBlockValidationError extends ValidationError<HydratedBlock> {}

export const isHydratedBlockValidationError = (
  error: unknown,
): error is HydratedBlockValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === HydratedBlockValidationError.constructor.name
  )
}

export class HydratedBlockStateValidationError extends ValidationError<HydratedBlock> {
  chainId: ChainId
  constructor(hash: Hash, chainId: ChainId, value: HydratedBlock, message?: string, cause?: unknown) {
    super(hash, value, message, cause)
    this.chainId = chainId
  }
}

export const isHydratedBlockStateValidationError = (
  error: unknown,
): error is HydratedBlockStateValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === HydratedBlockStateValidationError.constructor.name
  )
}
