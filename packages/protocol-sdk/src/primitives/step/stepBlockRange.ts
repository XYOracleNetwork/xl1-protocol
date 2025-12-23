import type { StepIdentity, XL1BlockRange } from '@xyo-network/xl1-protocol'
import { asXL1BlockRange, StepSizes } from '@xyo-network/xl1-protocol'

export function stepBlockRange({ block, step }: StepIdentity): XL1BlockRange {
  const stepSize = StepSizes[step]
  const start = block - stepSize
  return asXL1BlockRange([start, start + stepSize - 1], { name: 'stepBlockRange' })
}
