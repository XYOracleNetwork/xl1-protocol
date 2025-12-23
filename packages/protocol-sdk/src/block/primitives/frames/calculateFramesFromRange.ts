import type { XL1BlockRange } from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, stepSize } from '@xyo-network/xl1-protocol'

export function calculateFramesFromRange(range: XL1BlockRange, step: number): [
  // ranges of fitted frames
  XL1BlockRange[],
  // ranges of remaining blocks
  XL1BlockRange[]] {
  const size = stepSize(step)
  let start = (Math.trunc(range[0] / size)) * size
  const fitted: XL1BlockRange[] = []
  const remaining: XL1BlockRange[] = []

  // if the start is not aligned with the range, add a remaining block
  if (start !== range[0]) {
    start += size
    remaining.push([range[0], asXL1BlockNumber(Math.min(start - 1, range[1]), true)])
  }

  for (let i = start; i <= range[1]; i += size) {
    if ((i + size - 1) <= range[1]) {
      fitted.push([asXL1BlockNumber(i, { name: 'calculateFramesFromRange A' }),
        asXL1BlockNumber(Math.min(i + size - 1, range[1]), { name: 'calculateFramesFromRange B' })])
    } else {
      remaining.push([asXL1BlockNumber(i, { name: 'calculateFramesFromRange C' }), range[1]])
    }
  }
  return [fitted, remaining]
}
