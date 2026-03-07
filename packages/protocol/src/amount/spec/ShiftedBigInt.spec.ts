import {
  describe, expect, it,
} from 'vitest'

import { ShiftedBigInt } from '../ShiftedBigInt.ts'

describe('ShiftedBigInt', () => {
  describe('constructor', () => {
    it('should create from bigint with default config', () => {
      const s = new ShiftedBigInt(1_000_000_000_000_000_000n)
      expect(s.value).toBe(1_000_000_000_000_000_000n)
      expect(s.places).toBe(18)
    })

    it('should create from another ShiftedBigInt inheriting config', () => {
      const original = new ShiftedBigInt(1000n, { places: 3 })
      const copy = new ShiftedBigInt(original)
      expect(copy.value).toBe(1000n)
      expect(copy.places).toBe(3)
    })

    it('should allow overriding config from another ShiftedBigInt', () => {
      const original = new ShiftedBigInt(1000n, { places: 3 })
      const copy = new ShiftedBigInt(original, { places: 6 })
      expect(copy.places).toBe(6)
    })
  })

  describe('getters', () => {
    it('should return default locale', () => {
      const s = new ShiftedBigInt(0n)
      expect(s.locale).toBe('en-US')
    })

    it('should return custom locale', () => {
      const s = new ShiftedBigInt(0n, { locale: 'de-DE' })
      expect(s.locale).toBe('de-DE')
    })

    it('should return default maxCharacters', () => {
      const s = new ShiftedBigInt(0n)
      expect(s.maxCharacters).toBe(9)
    })

    it('should return default maxDecimal', () => {
      const s = new ShiftedBigInt(0n)
      expect(s.maxDecimal).toBe(18)
    })

    it('should return default minDecimals', () => {
      const s = new ShiftedBigInt(0n)
      expect(s.minDecimals).toBe(1)
    })
  })

  describe('toFullString', () => {
    it('should format 1 unit correctly', () => {
      const s = new ShiftedBigInt(1_000_000_000_000_000_000n)
      const result = s.toFullString()
      expect(result).toContain('1')
    })

    it('should format zero correctly', () => {
      const s = new ShiftedBigInt(0n)
      const result = s.toFullString()
      expect(result).toContain('0')
    })
  })

  describe('toShortString', () => {
    it('should return a shorter representation', () => {
      const s = new ShiftedBigInt(1_000_000_000_000_000_000n)
      const result = s.toShortString()
      expect(result).toContain('1')
    })

    it('should truncate long decimals', () => {
      const s = new ShiftedBigInt(1_234_567_890_123_456_789n, { maxCharacters: 5 })
      const result = s.toShortString()
      expect(typeof result).toBe('string')
    })
  })

  describe('toString', () => {
    it('should return same as toFullString', () => {
      const s = new ShiftedBigInt(1_500_000_000_000_000_000n)
      expect(s.toString()).toBe(s.toFullString())
    })
  })
})
