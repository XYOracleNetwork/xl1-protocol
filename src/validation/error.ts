import { isError } from '@xylabs/typeof'
import type { Payload } from '@xyo-network/payload-model'

export interface ValidationError<TValue = Payload> extends Error {
  value: TValue
}

export const isValidationError = <TValue = Payload>(
  error: unknown,
): error is ValidationError<TValue> => {
  return (
    isError(error) && (error as ValidationError<TValue>)?.value !== undefined
  )
}
