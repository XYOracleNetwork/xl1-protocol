import { Account, BoundWitnessSchema } from '@xyo-network/sdk-js'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { TransactionBoundWitnessWithStorageMetaJsonSchema } from '../TransactionBoundWitnessWithStorageMeta.ts'

const ajv = new Ajv()

const validHash = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'
const validHash2 = 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2'
const validSequence = 'a1b2c3d4'

describe('TransactionBoundWitnessWithStorageMetaJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(TransactionBoundWitnessWithStorageMetaJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/transaction-with-storage-meta')
  })

  test('should validate a valid TransactionBoundWitnessWithStorageMeta payload', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const validPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      chain,
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    const result = validate(validPayload)
    expect(validate.errors).toBe(null)
    expect(result).toBe(true)
  })

  test('should invalidate a payload missing storage meta fields', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain,
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with missing required fields', () => {
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = { chain: '1234567890abcdef1234567890abcdef12345678' }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid chain pattern', () => {
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      chain: 'invalid-chain',
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with chain containing 0x prefix', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      chain: `0x${chain}`,
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid _hash pattern', () => {
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: 'invalid-hash',
      _sequence: validSequence,
      addresses: [],
      chain: '1234567890abcdef1234567890abcdef12345678',
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with non-integer nbf', () => {
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      chain: '1234567890abcdef1234567890abcdef12345678',
      exp: 9_999_999_999,
      gas: 'ff',
      nbf: 'not-an-integer',
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with non-integer exp', () => {
    const validate = ajv.compile(TransactionBoundWitnessWithStorageMetaJsonSchema)
    const invalidPayload = {
      _dataHash: validHash2,
      _hash: validHash,
      _sequence: validSequence,
      addresses: [],
      chain: '1234567890abcdef1234567890abcdef12345678',
      exp: 'not-an-integer',
      gas: 'ff',
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
