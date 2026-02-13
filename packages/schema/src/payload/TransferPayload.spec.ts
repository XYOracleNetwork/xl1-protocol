import { Account } from '@xyo-network/sdk-js'
import { TransferSchema } from '@xyo-network/xl1-protocol'
import { Ajv } from 'ajv'
import {
  describe, expect, test,
} from 'vitest'

import { TransferPayloadJsonSchema } from './TransferPayload.ts'

const ajv = new Ajv()

describe('TransferPayloadJsonSchema', () => {
  test('should have the correct $id', () => {
    expect(TransferPayloadJsonSchema.$id).toBe('https://schemas.xyo.network/2.0/payload/transfer')
  })

  test('should define the correct properties', () => {
    const properties = TransferPayloadJsonSchema.properties
    expect(properties).toHaveProperty('from')
    expect(properties).toHaveProperty('epoch')
    expect(properties).toHaveProperty('transfers')
    expect(properties).toHaveProperty('schema')
  })

  test('should include required fields', () => {
    expect(TransferPayloadJsonSchema.required).toContain('transfers')
    expect(TransferPayloadJsonSchema.required).toContain('epoch')
  })

  test('should have type "object"', () => {
    expect(TransferPayloadJsonSchema.type).toBe('object')
  })

  test('should validate a valid payload', async () => {
    const fromAddress = (await Account.random()).address
    const toAddress = (await Account.random()).address
    const validate = ajv.compile(TransferPayloadJsonSchema)
    const validPayload = {
      from: fromAddress,
      epoch: 1_234_567_890,
      transfers: { [toAddress]: '1000000000000000000' },
      schema: TransferSchema,
    }
    const result = validate(validPayload)
    expect(result).toBe(true)
  })

  test('should validate a invalid payload - leading 0x on from address', async () => {
    const validate = ajv.compile(TransferPayloadJsonSchema)
    const fromAddress = (await Account.random()).address
    const toAddress = (await Account.random()).address
    const validPayload = {
      from: `0x${fromAddress}`,
      epoch: 1_234_567_890,
      transfers: { [toAddress]: '1000000000000000000' },
      schema: TransferSchema,
    }
    expect(validate(validPayload)).toBe(false)
  })

  test('should validate a invalid payload - leading 0x on from address', async () => {
    const validate = ajv.compile(TransferPayloadJsonSchema)
    const fromAddress = (await Account.random()).address
    const toAddress = (await Account.random()).address
    const validPayload = {
      from: fromAddress,
      epoch: 1_234_567_890,
      transfers: { [`0x${toAddress}`]: '1000000000000000000' },
      schema: TransferSchema,
    }
    expect(validate(validPayload)).toBe(false)
  })

  test('should invalidate an invalid payload', () => {
    const validate = ajv.compile(TransferPayloadJsonSchema)
    const invalidPayload = {
      from: 'invalid-address',
      epoch: 'not-a-number',
      transfers: { 'invalid-address': 'not-a-uint256' },
      schema: 'invalid-schema',
    }
    expect(validate(invalidPayload)).toBe(false)
  })
})
