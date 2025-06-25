import { type Hash, isHash } from '@xylabs/hex'
import { isError } from '@xylabs/typeof'
import type { Payload } from '@xyo-network/payload-model'

export class ValidationError<TValue = Payload> extends Error {
  errors?: Error[]
  value: TValue
  constructor(cause: Hash, value: TValue, message?: string, errors?: Error[]) {
    super(message)
    this.cause = cause
    this.errors = errors
    this.name = this.constructor.name
    this.value = value
  }
}

export const isValidationError = <TValue = Payload>(
  error: unknown,
): error is ValidationError<TValue> => {
  return (
    isError(error) && isHash((error as ValidationError<TValue>)?.cause) && (error as ValidationError<TValue>)?.value !== undefined
  )
}
