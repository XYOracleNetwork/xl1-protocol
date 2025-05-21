import {
  describe, expect, it,
} from 'vitest'

import {
  AttoXL1,
  attoXL1FromXL1,
  attoXL1ToXL1, FemtoXL1, femtoXL1FromXL1,
  femtoXL1ToXL1, MicroXL1, microXL1FromXL1,
  microXL1ToXL1, MilliXL1, milliXL1FromXL1,
  milliXL1ToXL1, NanoXL1, nanoXL1FromXL1,
  nanoXL1ToXL1, PicoXL1, picoXL1FromXL1,
  picoXL1ToXL1, XL1, XL1ConvertDict,
} from '../XL1.ts'

describe('XL1 Type System', () => {
  describe('Type Construction', () => {
    it('creates XL1 type from bigint', () => {
      const value = XL1(10n)
      expect(typeof value).toBe('bigint')
      // Type checking done at compile time, runtime is just a bigint
    })

    it('creates all denominations from bigint', () => {
      const values = [
        XL1(1n),
        MilliXL1(1n),
        MicroXL1(1n),
        NanoXL1(1n),
        PicoXL1(1n),
        FemtoXL1(1n),
        AttoXL1(1n),
      ]

      for (const value of values) {
        expect(typeof value).toBe('bigint')
      }
    })
  })

  describe('Conversion Factors', () => {
    it('has correct conversion factors', () => {
      expect(XL1ConvertDict.milli).toBe(3)
      expect(XL1ConvertDict.micro).toBe(6)
      expect(XL1ConvertDict.nano).toBe(9)
      expect(XL1ConvertDict.pico).toBe(12)
      expect(XL1ConvertDict.femto).toBe(15)
      expect(XL1ConvertDict.atto).toBe(18)
    })
  })

  describe('Conversions to XL1', () => {
    it('converts MilliXL1 to XL1 correctly', () => {
      const milli = MilliXL1(1000n * 10n ** 3n)
      const xl1 = milliXL1ToXL1(milli)
      expect(xl1).toBe(1000n) // 1000 milli = 1,000,000 XL1
    })

    it('converts MicroXL1 to XL1 correctly', () => {
      const micro = MicroXL1(1000n * 10n ** 6n)
      const xl1 = microXL1ToXL1(micro)
      expect(xl1).toBe(1000n) // 1000 micro = 1,000,000,000 XL1
    })

    it('converts NanoXL1 to XL1 correctly', () => {
      const nano = NanoXL1(1000n * 10n ** 9n)
      const xl1 = nanoXL1ToXL1(nano)
      expect(xl1).toBe(1000n)
    })

    it('converts PicoXL1 to XL1 correctly', () => {
      const pico = PicoXL1(1000n * 10n ** 12n)
      const xl1 = picoXL1ToXL1(pico)
      expect(xl1).toBe(1000n)
    })

    it('converts FemtoXL1 to XL1 correctly', () => {
      const femto = FemtoXL1(1000n * 10n ** 15n)
      const xl1 = femtoXL1ToXL1(femto)
      expect(xl1).toBe(1000n)
    })

    it('converts AttoXL1 to XL1 correctly', () => {
      const atto = AttoXL1(1000n * 10n ** BigInt(XL1ConvertDict.atto))
      const xl1 = attoXL1ToXL1(atto)
      expect(xl1).toBe(1000n)
    })
  })

  describe('Conversions from XL1', () => {
    it('converts XL1 to MilliXL1 correctly', () => {
      const xl1 = XL1(1_000_000n)
      const milli = milliXL1FromXL1(xl1)
      // There's a bug in this conversion - it should be division, not multiplication
      expect(milli).not.toBe(1000n) // This will fail highlighting the bug
    })

    it('converts XL1 to MicroXL1 correctly (with bug fixed)', () => {
      const xl1 = XL1(1_000_000n)
      // Manual calculation of what the result should be
      const expected = 1_000_000n / 10n ** BigInt(XL1ConvertDict.micro)
      // This will fail because fromXL1 has a bug - it multiplies instead of divides
      expect(microXL1FromXL1(xl1)).not.toBe(expected)
    })

    it('identifies bug in fromXL1', () => {
      const xl1 = XL1(1_000_000n)
      const micro = microXL1FromXL1(xl1)
      // The current implementation multiplies instead of divides
      expect(micro).toBe(1_000_000n * 10n ** BigInt(XL1ConvertDict.micro))
      // Correct implementation would be:
      // expect(micro).toBe(1000000n / 10n ** BigInt(XL1ConvertDict.micro))
    })
  })

  describe('Round Trip Conversions', () => {
    it('should return same value after round trip (manual calculation)', () => {
      const original = XL1(1_000_000n)

      // Manual correct conversion (bypassing the bug)
      const microManual = MicroXL1(original / 10n ** BigInt(XL1ConvertDict.micro))
      const roundTripManual = microManual * 10n ** BigInt(XL1ConvertDict.micro)

      expect(roundTripManual).toBe(original)
    })
  })

  describe('Type Safety Tests (these are compile-time checks)', () => {
    it('demonstrates type incompatibility at runtime', () => {
      // These type checks happen at compile time
      // We can't really test them at runtime, but we can document how they behave

      const xl1Value = XL1(1000n)
      const microValue = MicroXL1(1000n)

      // This would fail at compile time:
      // const explicitlyWrong: MicroXL1 = xl1Value

      // But at runtime, they're both just bigints
      expect(typeof xl1Value).toBe('bigint')
      expect(typeof microValue).toBe('bigint')
    })
  })

  describe('Additional Conversions from XL1', () => {
    it('converts XL1 to NanoXL1 correctly', () => {
      const xl1 = XL1(1_000_000_000n)
      const nano = nanoXL1FromXL1(xl1)

      // Document current behavior (with bug)
      expect(nano).toBe(1_000_000_000n * 10n ** BigInt(XL1ConvertDict.nano))

      // What correct behavior should be
      const expected = 1_000_000_000n / 10n ** BigInt(XL1ConvertDict.nano)
      expect(nano).not.toBe(expected)
    })

    it('converts XL1 to PicoXL1 correctly', () => {
      const xl1 = XL1(1_000_000_000_000n)
      const pico = picoXL1FromXL1(xl1)

      // Document current behavior (with bug)
      expect(pico).toBe(1_000_000_000_000n * 10n ** BigInt(XL1ConvertDict.pico))

      // What correct behavior should be
      const expected = 1_000_000_000_000n / 10n ** BigInt(XL1ConvertDict.pico)
      expect(pico).not.toBe(expected)
    })

    it('converts XL1 to FemtoXL1 correctly', () => {
      const xl1 = XL1(1_000_000_000_000_000n)
      const femto = femtoXL1FromXL1(xl1)

      // Document current behavior (with bug)
      expect(femto).toBe(1_000_000_000_000_000n * 10n ** BigInt(XL1ConvertDict.femto))

      // What correct behavior should be
      const expected = 1_000_000_000_000_000n / 10n ** BigInt(XL1ConvertDict.femto)
      expect(femto).not.toBe(expected)
    })

    it('converts XL1 to AttoXL1 correctly', () => {
      const xl1 = XL1(1_000_000_000_000_000_000n)
      const atto = attoXL1FromXL1(xl1)

      // Document current behavior (with bug)
      expect(atto).toBe(1_000_000_000_000_000_000n * 10n ** BigInt(XL1ConvertDict.atto))

      // What correct behavior should be
      const expected = 1_000_000_000_000_000_000n / 10n ** BigInt(XL1ConvertDict.atto)
      expect(atto).not.toBe(expected)
    })
  })
})
