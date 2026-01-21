import { HashSchema } from '@xyo-network/xl1-protocol'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { HashPayloadJsonSchema } from './HashPayload.ts'

const ajv = new Ajv()

describe('HashPayloadJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(HashPayloadJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/payload/hash')
  })

  test('should define the correct properties', () => {
    const properties = HashPayloadJsonSchema.properties
    expect(properties).toHaveProperty('hash')
    expect(properties).toHaveProperty('schema')
  })

  test('should include required fields', () => {
    expect(HashPayloadJsonSchema.required).toContain('hash')
  })

  test('should have type "object"', () => {
    expect(HashPayloadJsonSchema.type).toBe('object')
  })

  test('should validate a valid payload', () => {
    const validate = ajv.compile(HashPayloadJsonSchema)
    const validPayload = {
      hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      schema: HashSchema,
    }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })

  test('should invalidate a payload with missing required fields', () => {
    const validate = ajv.compile(HashPayloadJsonSchema)
    const invalidPayload = { schema: HashSchema }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid hash pattern', () => {
    const validate = ajv.compile(HashPayloadJsonSchema)
    const invalidPayload = {
      hash: 'invalid-hash!',
      schema: HashSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with additional properties', () => {
    const validate = ajv.compile(HashPayloadJsonSchema)
    const invalidPayload = {
      hash: 'abc123',
      schema: HashSchema,
      extraField: 'not-allowed',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with an invalid schema', () => {
    const validate = ajv.compile(HashPayloadJsonSchema)
    const invalidPayload = {
      hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2', // Valid 32-byte hash
      schema: 'InvalidSchema', // Invalid schema
    }
    const result = validate(invalidPayload)
    expect(result).toBe(false)
  })
})
