import { type Hash, isHash } from '@xylabs/sdk-js'
import { isError } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'

export class ValidationError<TValue = Payload> extends Error {
  hash: Hash
  value: TValue
  constructor(hash: Hash, value: TValue, message?: string, cause?: unknown) {
    super(message)
    this.hash = hash
    this.name = this.constructor.name
    this.value = value
    this.cause = cause
  }
}

export const isValidationError = <TValue = Payload>(
  error: unknown,
): error is ValidationError<TValue> => {
  return (
    isError(error) && isHash((error as ValidationError<TValue>)?.hash) && (error as ValidationError<TValue>)?.value !== undefined
  )
}
