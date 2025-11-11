import type { AssertConfig } from '@xylabs/hex'
import { assertError } from '@xylabs/hex'
import type z from 'zod'

export function zodAsFactory<T>(zod: z.ZodType<T>) {
  function asFunc(value: unknown): T | undefined
  function asFunc(value: unknown, assert: AssertConfig): T
  function asFunc(value: unknown, assert?: AssertConfig): T | undefined {
    const result = zod.safeParse(value)
    if (result.success) {
      return result.data
    }
    return assertError(value, assert, result.error.message)
  }

  return asFunc
}
