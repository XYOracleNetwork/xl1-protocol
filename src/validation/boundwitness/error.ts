import type { HydratedBoundWitness } from '@xyo-network/archivist-model'
import { type BoundWitness } from '@xyo-network/boundwitness-model'

import { isValidationError, ValidationError } from '../error.ts'

export class BoundWitnessValidationError extends ValidationError<BoundWitness> {}

export const isBoundWitnessValidationError = (
  error: unknown,
): error is BoundWitnessValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === BoundWitnessValidationError.constructor.name
  )
}

export class HydratedBoundWitnessValidationError extends ValidationError<HydratedBoundWitness> {}

export const isHydratedBoundWitnessValidationError = (
  error: unknown,
): error is HydratedBoundWitnessValidationError => {
  if (!isValidationError(error)) return false
  return (
    error.name === HydratedBoundWitnessValidationError.constructor.name
  )
}
