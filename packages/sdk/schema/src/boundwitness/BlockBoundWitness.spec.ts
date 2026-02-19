import { BoundWitnessSchema } from '@xyo-network/sdk-js'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { BlockBoundWitnessJsonSchema } from './BlockBoundWitness.ts'

const ajv = new Ajv()

describe('BlockBoundWitnessJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(BlockBoundWitnessJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/block')
  })

  test('should validate a valid BlockBoundWitness payload', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const validPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
        'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
      ],
      $epoch: 1_234_567_890,
      schema: BoundWitnessSchema,
    }
    const result = validate(validPayload)
    expect(validate.errors).toBe(null)
    expect(result).toBe(true)
  })

  test('should validate a valid BlockBoundWitness payload with payload_hashes, payload_schemas, and previous_hashes', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const validPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      payload_schemas: ['valid.schema'],
      previous_hashes: [
        'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
      ],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 1_234_567_890,
      schema: BoundWitnessSchema,
    }
    const result = validate(validPayload)
    expect(validate.errors).toBe(null)
    expect(result).toBe(true)
  })

  test('should invalidate a payload with missing required fields', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid chain pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      block: 1,
      chain: 'invalid-chain',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      step_hashes: ['a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'],
      $epoch: 1_234_567_890,
      schema: 'BoundWitnessSchema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid chain pattern (0x prefix)', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      block: 1,
      chain: '0x1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      step_hashes: ['a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'],
      $epoch: 1_234_567_890,
      schema: 'BoundWitnessSchema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid step_hashes pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      block: 1,
      chain: '0x1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      step_hashes: ['invalid-hash'],
      $epoch: 1_234_567_890,
      schema: 'BoundWitnessSchema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid schema pattern', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      block: 1,
      chain: '0x1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 1_234_567_890,
      schema: 'InvalidSchema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid payload_hashes', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: ['invalid-hash'],
      payload_schemas: ['valid.schema'],
      previous_hashes: [
        'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
      ],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 1_234_567_890,
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid payload_schemas', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      payload_schemas: ['InvalidSchema'],
      previous_hashes: [
        'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
      ],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 1_234_567_890,
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid previous_hashes', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      payload_schemas: ['valid.schema'],
      previous_hashes: ['invalid-hash'],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 1_234_567_890,
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid $epoch', () => {
    const validate = ajv.compile(BlockBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      block: 1,
      chain: '1234567890abcdef1234567890abcdef12345678',
      previous: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      payload_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      payload_schemas: ['valid.schema'],
      previous_hashes: [
        'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2',
      ],
      step_hashes: [
        'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      ],
      $epoch: 'invalid-epoch', // Invalid $epoch
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
