import {
  describe, expect, it,
} from 'vitest'

import {
  asAttoXL1, AttoXL1MaxValue, isAttoXL1, toAttoXL1,
} from '../AttoXL1.ts'

describe('AttoXL1', () => {
  describe('isAttoXL1', () => {
    it('should return true for valid values', () => {
      expect(isAttoXL1(0n)).toBe(true)
      expect(isAttoXL1(1000n)).toBe(true)
      expect(isAttoXL1(AttoXL1MaxValue)).toBe(true)
    })

    it('should return false for invalid values', () => {
      expect(isAttoXL1(-1n)).toBe(false)
      expect(isAttoXL1(AttoXL1MaxValue + 1n)).toBe(false)
      expect(isAttoXL1(42)).toBe(false)
    })
  })

  describe('asAttoXL1', () => {
    it('should return the value for valid bigint', () => {
      expect(asAttoXL1(1000n)).toBe(1000n)
    })

    it('should throw for invalid values', () => {
      expect(() => asAttoXL1(-1n)).toThrow()
    })
  })

  describe('toAttoXL1', () => {
    it('should convert valid number to AttoXL1', () => {
      expect(toAttoXL1(100)).toBe(100n)
    })

    it('should convert valid string to AttoXL1', () => {
      expect(toAttoXL1('1000')).toBe(1000n)
    })

    it('should return undefined for out-of-range values', () => {
      expect(toAttoXL1(-1)).toBeUndefined()
    })
  })
})
