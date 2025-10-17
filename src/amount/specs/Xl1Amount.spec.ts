import {
  describe, expect, it,
} from 'vitest'

import type {
  AttoXL1, FemtoXL1, MicroXL1, MilliXL1, NanoXL1, PicoXL1,
} from '../../xl1/index.ts'
import { XL1Places } from '../../xl1/index.ts'
import { XL1Amount } from '../XL1Amount2.ts'

describe('XL1Amount', () => {
  describe('constructor', () => {
    it('should create an instance with valid value', () => {
      const amount = new XL1Amount(1000n)
      expect(amount.value).toBe(1000n)
    })

    it('should clamp negative values to 0', () => {
      const amount = new XL1Amount(-1000n)
      expect(amount.value).toBe(0n)
    })

    // it('should clamp values exceeding MAX_XL1_AMOUNT', () => {
    //   const maxValue = 2n ** 256n - 1n
    //   const amount = new XL1Amount(maxValue + 1n)
    //   expect(amount.value).toBe(maxValue)
    // })

    it('should accept custom locale', () => {
      const amount = new XL1Amount(1000n, 'de-DE')
      expect(amount.value).toBe(1000n)
    })
  })

  describe('static from method', () => {
    it('should create XL1Amount from value and places', () => {
      const amount = XL1Amount.from(1n, XL1Places.milli)
      expect(amount.value).toBe(1n * 10n ** XL1Places.milli)
    })

    it('should default to atto places', () => {
      const amount = XL1Amount.from(1000n)
      expect(amount.value).toBe(1000n)
    })

    it('should throw error for invalid places', () => {
      expect(() => XL1Amount.from(1000n, 99n)).toThrow('Invalid conversion places')
    })
  })

  describe('static factory methods', () => {
    it('should create from milli', () => {
      const amount = XL1Amount.fromMilli(1n as MilliXL1)
      expect(amount.value).toBe(1n * 10n ** XL1Places.milli)
    })

    it('should create from micro', () => {
      const amount = XL1Amount.fromMicro(1n as MicroXL1)
      expect(amount.value).toBe(1n * 10n ** XL1Places.micro)
    })

    it('should create from nano', () => {
      const amount = XL1Amount.fromNano(1n as NanoXL1)
      expect(amount.value).toBe(1n * 10n ** XL1Places.nano)
    })

    it('should create from pico', () => {
      const amount = XL1Amount.fromPico(1n as PicoXL1)
      expect(amount.value).toBe(1n * 10n ** XL1Places.pico)
    })

    it('should create from femto', () => {
      const amount = XL1Amount.fromFemto(1n as FemtoXL1)
      expect(amount.value).toBe(1n * 10n ** XL1Places.femto)
    })

    it('should create from atto', () => {
      const amount = XL1Amount.fromAtto(1000n as AttoXL1)
      expect(amount.value).toBe(1000n)
    })
  })

  describe('to method', () => {
    it('should convert to specified places', () => {
      const amount = new XL1Amount(1_000_000_000_000_000_000n) // 1 * 10^18
      expect(amount.to(XL1Places.milli)).toBe(1000n)
    })

    it('should default to atto places', () => {
      const amount = new XL1Amount(1000n)
      expect(amount.to()).toBe(1000n)
    })

    it('should handle bigint places', () => {
      const amount = new XL1Amount(1_000_000_000_000_000_000n)
      expect(amount.to(XL1Places.milli)).toBe(1000n)
    })
  })

  describe('getters', () => {
    const oneXl1 = 1n * 10n ** BigInt(XL1Places.xl1) // 1 * 10^18
    const amount = new XL1Amount(oneXl1) // 1 * 10^18

    it('should get milli value', () => {
      expect(amount.milli).toBe(1000n)
    })

    it('should get micro value', () => {
      expect(amount.micro).toBe(1_000_000n)
    })

    it('should get nano value', () => {
      expect(amount.nano).toBe(1_000_000_000n)
    })

    it('should get pico value', () => {
      expect(amount.pico).toBe(1_000_000_000_000n)
    })

    it('should get femto value', () => {
      expect(amount.femto).toBe(1_000_000_000_000_000n)
    })

    it('should get atto value', () => {
      expect(amount.atto).toBe(oneXl1)
    })
  })

  describe('toString method', () => {
    it('should convert to string with default places', () => {
      const amount = new XL1Amount(1_000_000_000_000_000_000n)
      const result = amount.toString()
      expect(typeof result).toBe('string')
    })

    it('should convert to string with specified places', () => {
      const amount = new XL1Amount(1_000_000_000_000_000_000n)
      const result = amount.toString(Number(XL1Places.milli))
      expect(typeof result).toBe('string')
    })

    it('should accept custom config', () => {
      const amount = new XL1Amount(1_000_000_000_000_000_000n)
      const result = amount.toString(Number(XL1Places.milli), { minDecimals: 2 })
      expect(typeof result).toBe('string')
    })

    it('should throw error for invalid places', () => {
      const amount = new XL1Amount(1000n)
      expect(() => amount.toString(99)).toThrow('Invalid conversion places')
    })
  })

  describe('edge cases', () => {
    it('should handle zero value', () => {
      const amount = new XL1Amount(0n)
      expect(amount.value).toBe(0n)
      expect(amount.to(XL1Places.milli)).toBe(0n)
    })

    it('should handle division with remainder', () => {
      const amount = new XL1Amount(1_500_000_000_000_000_000n)
      expect(amount.to(XL1Places.milli)).toBe(1500n)
    })
  })
})
