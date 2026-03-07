import {
  describe, expect, it,
} from 'vitest'

import { isXL1Factory } from '../isXL1Factory.ts'
import { xl1MaxValue } from '../xl1MaxValue.ts'

describe('isXL1Factory', () => {
  const isAtto = isXL1Factory(0n)
  const maxAtto = xl1MaxValue(0n)

  it('should return true for valid bigint within range', () => {
    expect(isAtto(0n)).toBe(true)
    expect(isAtto(100n)).toBe(true)
    expect(isAtto(maxAtto)).toBe(true)
  })

  it('should return false for non-bigint values', () => {
    expect(isAtto(100)).toBe(false)
    expect(isAtto('100')).toBe(false)
    expect(isAtto(null)).toBe(false)
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isAtto(undefined)).toBe(false)
  })

  it('should return false for negative bigint', () => {
    expect(isAtto(-1n)).toBe(false)
  })

  it('should return false for values exceeding max', () => {
    expect(isAtto(maxAtto + 1n)).toBe(false)
  })
})
