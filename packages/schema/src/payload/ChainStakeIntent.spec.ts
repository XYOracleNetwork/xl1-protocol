import { Account } from '@xyo-network/sdk-js'
import { ChainStakeIntentSchema } from '@xyo-network/xl1-protocol'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { ChainStakeIntentPayloadJsonSchema } from './ChainStakeIntent.ts'

const ajv = new Ajv()

describe('ChainStakeIntentPayloadJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(ChainStakeIntentPayloadJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/payload/chain-stake-intent')
  })

  test('should define the correct properties', () => {
    const properties = ChainStakeIntentPayloadJsonSchema.properties
    expect(properties).toHaveProperty('from')
    expect(properties).toHaveProperty('intent')
    expect(properties).toHaveProperty('schema')
  })

  test('should include required fields', () => {
    expect(ChainStakeIntentPayloadJsonSchema.required).toContain('intent')
  })

  test('should have type "object"', () => {
    expect(ChainStakeIntentPayloadJsonSchema.type).toBe('object')
  })

  test('should validate a valid payload', async () => {
    const fromAddress = (await Account.random()).address
    const validate = ajv.compile(ChainStakeIntentPayloadJsonSchema)
    const validPayload = {
      from: fromAddress,
      intent: 'producer',
      schema: ChainStakeIntentSchema,
    }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })

  test('should invalidate a payload with an invalid "from" address', () => {
    const validate = ajv.compile(ChainStakeIntentPayloadJsonSchema)
    const invalidPayload = {
      from: 'invalid-address',
      intent: 'producer',
      schema: ChainStakeIntentSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with an invalid "intent"', async () => {
    const fromAddress = (await Account.random()).address
    const validate = ajv.compile(ChainStakeIntentPayloadJsonSchema)
    const invalidPayload = {
      from: fromAddress,
      intent: 'invalid-intent',
      schema: ChainStakeIntentSchema,
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload with an invalid "schema"', async () => {
    const fromAddress = (await Account.random()).address
    const validate = ajv.compile(ChainStakeIntentPayloadJsonSchema)
    const invalidPayload = {
      from: fromAddress,
      intent: 'producer',
      schema: 'invalid-schema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })

  test('should invalidate a payload missing required fields', () => {
    const validate = ajv.compile(ChainStakeIntentPayloadJsonSchema)
    const invalidPayload = { from: 'valid-address' }
    expect(validate(invalidPayload)).toBe(false)
  })
})
