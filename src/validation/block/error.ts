import type { Address, Hash } from '@xylabs/hex'

import { type BlockBoundWitness, type HydratedBlock } from '../../block/index.ts'
import { isValidationError, ValidationError } from '../error.ts'

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
  chainId: Address
  constructor(hash: Hash, chainId: Address, value: HydratedBlock, message?: string, cause?: unknown) {
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
