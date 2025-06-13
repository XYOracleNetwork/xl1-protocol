import { type Address, isAddress } from '@xylabs/hex'
import { isUndefined } from '@xylabs/typeof'

import {
  type BlockBoundWitness, type HydratedBlock, isBlockBoundWitness,
} from '../../block/index.ts'
import { isHydratedBoundWitness } from '../../isHydratedBoundWitness.ts'
import { isValidationError, type ValidationError } from '../error.ts'

export interface BlockValidationError extends ValidationError<BlockBoundWitness> {}

export const isBlockValidationError = (
  error: unknown,
): error is BlockValidationError => {
  if (!isValidationError(error)) return false
  const { value } = error as BlockValidationError
  return (
    isBlockBoundWitness(value)
  )
}

export interface HydratedBlockValidationError extends ValidationError<HydratedBlock> {}

export const isHydratedBlockValidationError = (
  error: unknown,
): error is HydratedBlockValidationError => {
  if (!isValidationError<HydratedBlock>(error)) return false
  const { value } = error as HydratedBlockValidationError
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitness(value[0])
  )
}

export interface HydratedBlockStateValidationError extends ValidationError<HydratedBlock> {
  chainId: Address
}

export const isHydratedBlockStateValidationError = (
  error: unknown,
): error is HydratedBlockStateValidationError => {
  if (!isValidationError<HydratedBlock>(error)) return false
  const { value, chainId } = error as HydratedBlockStateValidationError
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitness(value[0]) && (isUndefined(chainId) || isAddress(chainId))
  )
}
