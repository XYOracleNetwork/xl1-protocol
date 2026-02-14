import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

describe('BigIntZod', () => {
  describe('JsonToBigIntZod', () => {
    it.each(['0', '00', '01010101', '0308'])('should bigint from string', (input) => {
      const result = JsonToBigIntZod.safeParse(input)
      expect(result.success).toBe(true)
    })
  })
  describe('BigIntToJsonZod', () => {
    it.each([0n, 1n, 100n, 1000n, 1_000_000n])('should parse bigint to string', (input) => {
      const result = BigIntToJsonZod.safeParse(input)
      expect(result.success).toBe(true)
    })
  })
})
