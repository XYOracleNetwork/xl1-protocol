import type {
  StepIdentity,
  XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'

export function blockRangeSteps(range: XL1BlockRange, steps: number[]): StepIdentity[] {
  const result: StepIdentity[] = []
  for (const step of steps) {
    const stepSize = StepSizes[step]
    // we add stepSize twice to get to the start of the next full step
    const startOfFirstStepCandidate = range[0] - (range[0] % stepSize) + stepSize
    const startOfFirstStep = asXL1BlockNumber(
      startOfFirstStepCandidate,
      { name: 'blockRangeSteps' },
    )
    for (let block = startOfFirstStep; block <= range[1]; block = asXL1BlockNumber(block + stepSize, { name: 'blockRangeSteps' })) {
      result.push({ step, block })
    }
  }
  return result
}
