import type { HydratedBoundWitness } from '@xyo-network/archivist-model'
import { type BoundWitness, isBoundWitness } from '@xyo-network/boundwitness-model'

import { isHydratedBoundWitness } from '../../isHydratedBoundWitness.ts'
import { isValidationError, ValidationError } from '../error.ts'

export class BoundWitnessValidationError extends ValidationError<BoundWitness> {}

export const isBoundWitnessValidationError = (
  error: unknown,
): error is BoundWitnessValidationError => {
  if (!isValidationError(error)) return false
  const { cause } = error as BoundWitnessValidationError
  return (
    isBoundWitness(cause)
  )
}

export class HydratedBoundWitnessValidationError extends ValidationError<HydratedBoundWitness> {}

export const isHydratedBoundWitnessValidationError = (
  error: unknown,
): error is HydratedBoundWitnessValidationError => {
  if (!isValidationError<HydratedBoundWitness>(error)) return false
  const { cause } = error as HydratedBoundWitnessValidationError
  return (
    isHydratedBoundWitness(cause)
  )
}
