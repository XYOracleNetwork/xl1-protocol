import { type Address, isAddress } from '@xylabs/hex'
import { isUndefined } from '@xylabs/typeof'

import {
  type BlockBoundWitness, type HydratedBlock, isBlockBoundWitness,
} from '../../block/index.ts'
import { isHydratedBoundWitness } from '../../isHydratedBoundWitness.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class BlockValidationError extends ValidationError<BlockBoundWitness> {}

export const isBlockValidationError = (
  error: unknown,
): error is BlockValidationError => {
  if (!isValidationError(error)) return false
  const { cause } = error as BlockValidationError
  return (
    isBlockBoundWitness(cause)
  )
}

export class HydratedBlockValidationError extends ValidationError<HydratedBlock> {}

export const isHydratedBlockValidationError = (
  error: unknown,
): error is HydratedBlockValidationError => {
  if (!isValidationError<HydratedBlock>(error)) return false
  const { cause } = error as HydratedBlockValidationError
  return (
    isHydratedBoundWitness(cause) && isBlockBoundWitness(cause[0])
  )
}

export class HydratedBlockStateValidationError extends ValidationError<HydratedBlock> {
  chainId: Address
  constructor(chainId: Address, cause: HydratedBlock, message?: string) {
    super(cause, message)
    this.chainId = chainId
  }

  override toJson() {
    return {
      ...super.toJson(),
      chainId: this.chainId,
    }
  }
}

export const isHydratedBlockStateValidationError = (
  error: unknown,
): error is HydratedBlockStateValidationError => {
  if (!isValidationError<HydratedBlock>(error)) return false
  const { cause, chainId } = error as HydratedBlockStateValidationError
  return (
    isHydratedBoundWitness(cause) && isBlockBoundWitness(cause[0]) && (isUndefined(chainId) || isAddress(chainId))
  )
}
