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

  it('calculates blocks per millisecond correctly', () => {
    // 10 blocks produced over 1000 milliseconds => 0.01 blocks/millisecond
    const start = [{ block: 200, $epoch: 0 }]
    const end = [{ block: 210, $epoch: 1000 }]

    const result = blockRate(start as any, end as any, 'millis')

    expect(result.span).toEqual(10)
    expect(result.timeDifference).toEqual(1000) // milliseconds
    expect(result.rateUnit).toEqual('millis')
    expect(result.rate).toBeCloseTo(0.01)
  })

  it('calculates blocks per minute correctly', () => {
    // 30 blocks produced over 60000 milliseconds => 30 blocks/minute
    const start = [{ block: 300, $epoch: 0 }]
    const end = [{ block: 330, $epoch: 60000 }]

    const result = blockRate(start as any, end as any, 'minutes')

    expect(result.span).toEqual(30)
    expect(result.timeDifference).toEqual(1) // minutes
    expect(result.rateUnit).toEqual('minutes')
    expect(result.rate).toBeCloseTo(30)
  })

  it('returns Infinity when time difference is zero', () => {
    // 10 blocks produced with identical epochs => division by zero
    const start = [{ block: 400, $epoch: 1000 }]
    const end = [{ block: 410, $epoch: 1000 }]

    const result = blockRate(start as any, end as any, 'seconds')

    expect(result.span).toEqual(10)
    expect(result.timeDifference).toEqual(0)
    expect(result.rate).toBe(Infinity)
  })

  it('calculates average milliseconds per block (time per block)', () => {
    // 10 blocks produced over 1000 milliseconds => 100 ms per block
    const start = [{ block: 500, $epoch: 0 }]
    const end = [{ block: 510, $epoch: 1000 }]

    const result = blockRate(start as any, end as any)

    expect(result.span).toEqual(10)
    // result.timeDifference is in millis when no timeUnit provided
    expect(result.timeDifference).toEqual(1000)
    const msPerBlock = result.timeDifference / result.span
    expect(msPerBlock).toBeCloseTo(100)
  })
})
