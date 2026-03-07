import {
  describe, expect, it,
} from 'vitest'

import { asBlockRange, toBlockNumberKey } from '../BlockRange.ts'

describe('BlockRange key serialization', () => {
  describe('toBlockNumberKey', () => {
    it('should serialize a block range to a pipe-separated key', () => {
      const range = asBlockRange([0, 100], true)
      const key = toBlockNumberKey(range)
      expect(key).toBe('0|100')
    })

    it('should handle large block numbers', () => {
      const range = asBlockRange([1_000_000, 2_000_000], true)
      const key = toBlockNumberKey(range)
      expect(key).toBe('1000000|2000000')
    })
  })
})
