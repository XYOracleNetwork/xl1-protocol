import type { XL1BlockRange } from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'

import { calculateFramesFromRange } from './calculateFramesFromRange.ts'

export function deepCalculateFramesFromRange(range: XL1BlockRange, startingStep = StepSizes.length - 1): XL1BlockRange[] {
  const fitted: XL1BlockRange[] = []
  let remaining: XL1BlockRange[] = [range]

  for (let step = startingStep; step >= 0; step--) {
    const newRemaining: XL1BlockRange[] = []
    for (const range of remaining) {
      const [newFittedFrames, newRemainingFrames] = calculateFramesFromRange(range, step)
      fitted.push(...newFittedFrames)
      newRemaining.push(...newRemainingFrames)
    }
    remaining = newRemaining
  }

  for (const range of remaining) {
    for (let i = range[0]; i <= range[1]; i++) {
      fitted.push([i, i]) // Add individual frames for remaining ranges
    }
  }

  return fitted.toSorted((a, b) => a[0] - b[0]) // Sort by start of range
}
