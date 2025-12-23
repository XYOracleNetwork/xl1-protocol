import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { StorageMetaJsonSchema } from './StorageMeta.ts'

const ajv = new Ajv()

describe('StorageMetaJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(StorageMetaJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/storage-meta')
  })

  test('should validate a valid storage meta payload', () => {
    const validate = ajv.compile(StorageMetaJsonSchema)
    const validPayload = {
      _sequence: 'a1b2c3d4',
      _hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      _dataHash: 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
    }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })

  test('should invalidate a payload with missing required fields', () => {
    const validate = ajv.compile(StorageMetaJsonSchema)
    const invalidPayload = {
      _sequence: 'a1b2c3d4',
      _hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _sequence pattern', () => {
    const validate = ajv.compile(StorageMetaJsonSchema)
    const invalidPayload = {
      _sequence: 'invalid-sequence',
      _hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      _dataHash: 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _hash pattern', () => {
    const validate = ajv.compile(StorageMetaJsonSchema)
    const invalidPayload = {
      _sequence: 'a1b2c3d4',
      _hash: 'invalid-hash',
      _dataHash: 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _dataHash pattern', () => {
    const validate = ajv.compile(StorageMetaJsonSchema)
    const invalidPayload = {
      _sequence: 'a1b2c3d4',
      _hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      _dataHash: 'invalid-data-hash',
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
