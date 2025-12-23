import { assertEx } from '@xylabs/sdk-js'
import { StepSizes } from '@xyo-network/xl1-protocol'

export function stepTransferIndex(block: number, step: number) {
  let rewardTransferCount = 0
  let rewardTransferIndex = -1
  for (let i = 3; i < StepSizes.length; i++) {
    const stepSize = StepSizes[i]
    if (block % stepSize === 0) {
      if (stepSize === StepSizes[step]) {
        rewardTransferIndex = rewardTransferCount
      }
      rewardTransferCount++
    }
  }
  assertEx(rewardTransferIndex >= 0, () => `Could not find step size for step ${step} at block ${block}`)
  return [rewardTransferIndex, rewardTransferCount]
}
