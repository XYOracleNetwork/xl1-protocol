import {
  describe, expect, it,
} from 'vitest'

import { splitOnDecimal } from '../splitOnDecimal.ts'

describe('splitOnDecimal', () => {
  it('should split a value into whole and decimal parts with default 18 places', () => {
    const [whole, decimal] = splitOnDecimal(1_500_000_000_000_000_000n)
    expect(whole).toBe(1n)
    expect(decimal).toBe(500_000_000_000_000_000n)
  })

  it('should return 0 whole for values less than 1 unit', () => {
    const [whole, decimal] = splitOnDecimal(500_000_000_000_000_000n)
    expect(whole).toBe(0n)
    expect(decimal).toBe(500_000_000_000_000_000n)
  })

  it('should return 0 decimal for exact whole units', () => {
    const [whole, decimal] = splitOnDecimal(3_000_000_000_000_000_000n)
    expect(whole).toBe(3n)
    expect(decimal).toBe(0n)
  })

  it('should handle zero', () => {
    const [whole, decimal] = splitOnDecimal(0n)
    expect(whole).toBe(0n)
    expect(decimal).toBe(0n)
  })

  it('should work with custom places', () => {
    const [whole, decimal] = splitOnDecimal(1500n, 3)
    expect(whole).toBe(1n)
    expect(decimal).toBe(500n)
  })

  it('should handle large values', () => {
    const largeValue = 123_456_789_000_000_000_000_000_000n
    const [whole, decimal] = splitOnDecimal(largeValue)
    expect(whole).toBe(123_456_789n)
    expect(decimal).toBe(0n)
  })
})
