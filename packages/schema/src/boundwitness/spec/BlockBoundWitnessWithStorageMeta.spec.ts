import { BoundWitnessSchema } from '@xyo-network/sdk-js'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { BlockBoundWitnessWithStorageMetaJsonSchema } from '../BlockBoundWitnessWithStorageMeta.ts'

const ajv = new Ajv()

const validHash = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'
const validHash2 = 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2'
const validChain = '1234567890abcdef1234567890abcdef12345678'
const validSequence = 'a1b2c3d4'

describe('BlockBoundWitnessWithStorageMetaJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(BlockBoundWitnessWithStorageMetaJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/block-with-storage-meta')
  })

  test('should validate a valid BlockBoundWitnessWithStorageMeta payload', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const validPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 1_234_567_890,
    }
    const result = validate(validPayload)
    expect(validate.errors).toBe(null)
    expect(result).toBe(true)
  })

  test('should invalidate a payload missing storage meta fields', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 1_234_567_890,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload missing block fields', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _hash pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: 'invalid-hash',
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 1_234_567_890,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _dataHash pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: 'invalid-data-hash',
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 1_234_567_890,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid chain pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: 'invalid-chain',
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 1_234_567_890,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid step_hashes pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: ['invalid-hash'],
      $epoch: 1_234_567_890,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with non-integer $epoch', () => {
    const validate = ajv.compile(BlockBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      block: 1,
      chain: validChain,
      payload_hashes: [],
      payload_schemas: [],
      previous: validHash,
      previous_hashes: [],
      schema: BoundWitnessSchema,
      step_hashes: [validHash],
      $epoch: 'invalid-epoch',
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
