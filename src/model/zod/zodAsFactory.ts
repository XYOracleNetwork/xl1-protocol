import type { AssertConfig } from '@xylabs/hex'
import { assertError } from '@xylabs/hex'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'

export function zodAsFactory<T>(zod: z.ZodType<T>, name: string) {
  function asFunc(value: unknown): T | undefined
  function asFunc(value: unknown, assert: ZodFactoryConfig): T
  function asFunc(value: unknown, assert?: ZodFactoryConfig): T | undefined {
    const result = zod.safeParse(value)
    if (result.success) {
      return result.data
    }
    if (assert !== undefined) {
      let assertConfig: AssertConfig
      switch (typeof assert) {
        case 'string': {
          assertConfig = `[${name}][${value}] ${assert}`
          break
        }
        case 'object': {
          assertConfig = `[${name}][${assert.name}][${value}] ${result.error.message}`
          break
        }
        case 'boolean': {
          assertConfig = `[${name}][${value}] ${result.error.message}`
          break
        }
        case 'function': {
          assertConfig = assert(value, result.error.message)
          break
        }
        default: {
          assertConfig = true
        }
      }
      return assertError(value, assertConfig, result.error.message)
    }
  }

  return asFunc
}
