import { asXL1BlockRange } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { deepCalculateFramesFromRange } from '../deepCalculateFramesFromRange.ts'

describe('deepCalculateFramesFromRange', () => {
  it('calculates frames for a simple range with one step level', () => {
    const range = asXL1BlockRange([0, 9], true)
    const result = deepCalculateFramesFromRange(range)

    // With step 0 (size 10), this should fit in one frame
    expect(result).toEqual([[0, 6], [7, 7], [8, 8], [9, 9]])
  })

  it('calculates frames for a range spanning multiple step sizes', () => {
    const range = asXL1BlockRange([0, 250], true)
    const result = deepCalculateFramesFromRange(range)

    expect(result).toContainEqual([0, 210])

    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(11)
  })

  it('calculates frames for range with multiple step levels - [0, 1500]', () => {
    const range = asXL1BlockRange([0, 1500], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(19)
  })

  it('calculates frames for range with multiple step levels - [0, 3000]', () => {
    const range = asXL1BlockRange([0, 3000], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(31)
  })

  it('calculates frames for range with multiple step levels = [45, 1599]', () => {
    const range = asXL1BlockRange([45, 1599], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(43)
  })

  it('calculates frames for range with multiple step levels = [45, 3333]', () => {
    const range = asXL1BlockRange([45, 3333], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(85)
  })

  it('calculates frames for range with multiple step levels - [23_145, 230_102_040]', () => {
    const range = asXL1BlockRange([23_145, 230_102_040], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(742)
  })

  it('calculates frames for range with multiple step levels - [23_145, 34_548_554_394]', () => {
    const range = asXL1BlockRange([23_145, 34_548_554_394], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(1468)
  })

  it('calculates frames for range with multiple step levels - [23_145, 4_598_734_539_845]', () => {
    const range = asXL1BlockRange([23_145, 4_598_734_539_845], true)
    const result = deepCalculateFramesFromRange(range)
    expect(result).toMatchSnapshot(result)
    expect(result.length).toEqual(2445)
  })
})
