import {
  describe, expect, it,
} from 'vitest'

import { xl1MaxValue } from '../xl1MaxValue.ts'

describe('xl1MaxValue', () => {
  it('should compute max value for atto (0 places)', () => {
    expect(xl1MaxValue(0n)).toBe(10n ** 32n - 1n)
  })

  it('should compute max value for xl1 (18 places)', () => {
    expect(xl1MaxValue(18n)).toBe(10n ** 14n - 1n)
  })

  it('should compute max value for milli (15 places)', () => {
    expect(xl1MaxValue(15n)).toBe(10n ** 17n - 1n)
  })

  it('should compute max value for nano (9 places)', () => {
    expect(xl1MaxValue(9n)).toBe(10n ** 23n - 1n)
  })
})
