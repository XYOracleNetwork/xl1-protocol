import { describe, it, expect } from 'vitest'
import { blockRate } from './blockRate'

describe('blockRate', () => {
  it('calculates blocks per second correctly', () => {
    // 10 blocks produced over 1000 milliseconds => 10 blocks/second
    const start = [{ block: 100, $epoch: 0 }]
    const end = [{ block: 110, $epoch: 1000 }]

    const result = blockRate(start as any, end as any, 'seconds')

    expect(result.span).toEqual(10)
    expect(result.timeDifference).toEqual(1) // seconds
    expect(result.rateUnit).toEqual('seconds')
    expect(result.rate).toBeCloseTo(10)
  })
})
