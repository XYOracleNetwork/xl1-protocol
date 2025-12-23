import {
  asXL1BlockRange, stepSize, XL1_BLOCK_NUMBER_ZERO,
} from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { calculateFramesFromRange } from '../calculateFramesFromRange.ts'

describe('calculateFramesFromRange', () => {
  it('handles range aligned with step size', () => {
    const step = 1 // 31
    const range = asXL1BlockRange([XL1_BLOCK_NUMBER_ZERO, stepSize(step) - 1], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([[0, 30]])
    expect(remaining).toEqual([])
  })

  it('handles range starting at step boundary but incomplete', () => {
    const step = 1
    const range = asXL1BlockRange([stepSize(step), stepSize(step) + 1], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([])
    expect(remaining).toEqual([range])
  })

  it('handles range starting at step boundary (step 1)', () => {
    const step = 1
    const multiplier = 2
    const additional = 1
    const range = asXL1BlockRange([stepSize(step), (stepSize(step) + additional) * multiplier], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([[31, 61]])
    expect(remaining).toEqual([[62, 64]])
  })

  it('handles range starting at step boundary (step 5)', () => {
    const step = 5
    const multiplier = 2
    const additional = 17
    const range = asXL1BlockRange([stepSize(step), (stepSize(step) + additional) * multiplier], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([[510_511, 1_021_021]])
    expect(remaining).toEqual([[1_021_022, 1_021_056]])
  })

  it('handles range starting not at step boundary', () => {
    const step = 1
    const multiplier = 2
    const additional = 1
    const range = asXL1BlockRange([stepSize(step) - additional, (stepSize(step) + additional) * multiplier], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([[31, 61]])
    expect(remaining).toEqual([[range[0], 30], [62, range[1]]])
  })

  it('handles range starting not at step boundary (step 5)', () => {
    const step = 5
    const multiplier = 2
    const additional = 17
    const range = asXL1BlockRange([stepSize(step) - additional, (stepSize(step) + additional) * multiplier], true)
    const [fitted, remaining] = calculateFramesFromRange(range, step)

    expect(fitted).toEqual([[510_511, 1_021_021]])
    expect(remaining).toEqual([[range[0], 510_510], [1_021_022, range[1]]])
  })
})
