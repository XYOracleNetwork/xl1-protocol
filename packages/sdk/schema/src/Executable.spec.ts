import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { ExecutableJsonSchema } from './Executable.ts'

const ajv = new Ajv()

describe('ExecutableJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(ExecutableJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/executable')
  })

  test('should validate a valid executable payload', () => {
    const validate = ajv.compile(ExecutableJsonSchema)
    const validPayload = { script: ['elevate|xxxxxx'] }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })

  test('should invalidate a payload with missing script', () => {
    const validate = ajv.compile(ExecutableJsonSchema)
    const invalidPayload = {}
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid script pattern', () => {
    const validate = ajv.compile(ExecutableJsonSchema)
    const invalidPayload = { script: ['invalid-opcode'] }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should allow additional properties', () => {
    const validate = ajv.compile(ExecutableJsonSchema)
    const validPayload = {
      script: ['elevate|'],
      extraField: 'extra-value',
    }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })
})
