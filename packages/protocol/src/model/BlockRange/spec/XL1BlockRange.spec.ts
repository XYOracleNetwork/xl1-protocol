import {
  describe, expect, it,
} from 'vitest'

import { asXL1BlockNumber } from '../../../BlockNumber/index.ts'
import type { XL1BlockRange } from '../XL1BlockRange.ts'
import { toXL1BlockNumberKey } from '../XL1BlockRange.ts'

describe('XL1BlockRange key serialization', () => {
  describe('toXL1BlockNumberKey', () => {
    it('should serialize a range to a pipe-separated key', () => {
      const range: XL1BlockRange = [asXL1BlockNumber(0, true), asXL1BlockNumber(100, true)]
      const key = toXL1BlockNumberKey(range)
      expect(key).toBe('0|100')
    })

    it('should handle large block numbers', () => {
      const range: XL1BlockRange = [asXL1BlockNumber(999_999, true), asXL1BlockNumber(1_000_000, true)]
      const key = toXL1BlockNumberKey(range)
      expect(key).toBe('999999|1000000')
    })
  })
})
