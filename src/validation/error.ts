import { isError } from '@xylabs/typeof'
import type { Payload } from '@xyo-network/payload-model'

export class ValidationError<TValue = Payload> extends Error {
  constructor(cause: TValue, message?: string) {
    super(message)
    this.cause = cause
    this.name = this.constructor.name
  }

  toJson() {
    return {
      name: this.name,
      message: this.message,
      cause: JSON.stringify(this.cause),
      stack: this.stack,
    }
  }
}

export const isValidationError = <TValue = Payload>(
  error: unknown,
): error is ValidationError<TValue> => {
  return (
    isError(error) && (error as ValidationError<TValue>)?.cause !== undefined
  )
}
