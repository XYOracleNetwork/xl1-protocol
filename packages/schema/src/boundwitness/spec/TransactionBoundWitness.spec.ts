import { Account, BoundWitnessSchema } from '@xyo-network/sdk-js'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { TransactionBoundWitnessJsonSchema } from '../TransactionBoundWitness.ts'

const ajv = new Ajv()

describe('TransactionBoundWitnessJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(TransactionBoundWitnessJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/transaction')
  })

  test('should validate a valid TransactionBoundWitness payload', async () => {
    const chain = (await Account.random()).address
    const from = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const validPayload = {
      addresses: [],
      chain,
      exp: 9_999_999_999,
      fees: { base: 'ff' },
      from,
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

  test('should validate a valid TransactionBoundWitness payload with all fee fields', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const validPayload = {
      addresses: [],
      chain,
      exp: 9_999_999_999,
      fees: {
        base: 'ff',
        gasLimit: 'ff',
        gasPrice: 'ff',
        priority: 'ff',
      },
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

  test('should invalidate a payload with missing required fields', () => {
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = { chain: '1234567890abcdef1234567890abcdef12345678' }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with invalid chain pattern', async () => {
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain: 'invalid-chain',
      exp: 9_999_999_999,
      fees: { base: 'ff' },
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
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain: `0x${chain}`,
      exp: 9_999_999_999,
      fees: { base: 'ff' },
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with fees missing required base field', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain,
      exp: 9_999_999_999,
      fees: {},
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with non-integer nbf', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain,
      exp: 9_999_999_999,
      fees: { base: 'ff' },
      nbf: 'not-an-integer',
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with non-integer exp', async () => {
    const chain = (await Account.random()).address
    const validate = ajv.compile(TransactionBoundWitnessJsonSchema)
    const invalidPayload = {
      addresses: [],
      chain,
      exp: 'not-an-integer',
      fees: { base: 'ff' },
      nbf: 1_000_000_000,
      payload_hashes: [],
      payload_schemas: [],
      previous_hashes: [],
      schema: BoundWitnessSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
