import { asXL1BlockNumber, asXL1BlockRange } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { blockRangeSteps } from '../blockRangeSteps.ts'

describe('blockRangeSteps', () => {
  it('should work [0] 0-21', { timeout: 120_000 }, () => {
    const range = asXL1BlockRange([0, 21], true)
    const steps = blockRangeSteps(range, [0])
    expect(steps.length).toBe(3)
    expect(steps[0].block).toBe(asXL1BlockNumber(7))
  })
  it('should work [0] 1-21', { timeout: 120_000 }, () => {
    const range = asXL1BlockRange([1, 21], true)
    const steps = blockRangeSteps(range, [0])
    expect(steps.length).toBe(3)
    expect(steps[0].block).toBe(asXL1BlockNumber(7))
  })
  it('should work [0] 0-20', { timeout: 120_000 }, () => {
    const range = asXL1BlockRange([0, 20], true)
    const steps = blockRangeSteps(range, [0])
    expect(steps.length).toBe(2)
    expect(steps[1].block).toBe(asXL1BlockNumber(14))
  })
  it('should work [0] 0-22', { timeout: 120_000 }, () => {
    const range = asXL1BlockRange([0, 22], true)
    const steps = blockRangeSteps(range, [0])
    expect(steps.length).toBe(3)
    expect(steps[2].block).toBe(asXL1BlockNumber(21))
  })
})
