import type { Address, Hash } from '@xylabs/hex'
import { isAddress } from '@xylabs/hex'
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
  constructor(hash: Hash, chainId: Address, value: HydratedBlock, message?: string, errors?: Error[]) {
    super(hash, value, message, errors)
    this.chainId = chainId
  }
}

export const isHydratedBlockStateValidationError = (
  error: unknown,
): error is HydratedBlockStateValidationError => {
  if (!isValidationError<HydratedBlock>(error)) return false
  const { cause, chainId } = error as HydratedBlockStateValidationError
  return (
    isValidationError(error) && isHydratedBoundWitness(cause) && isBlockBoundWitness(cause[0]) && (isUndefined(chainId) || isAddress(chainId))
  )
}
