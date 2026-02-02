import { assertEx } from '@xylabs/sdk-js'
import type {
  BlockViewer,
  TimeDurations, XL1BlockNumber, XL1BlockRate,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockRange, isValidStep, StepSizes,
} from '@xyo-network/xl1-protocol'

import { calculateBlockRate } from './blockRate.ts'

export const stepRate = async (
  viewer: BlockViewer,
  start: XL1BlockNumber,
  step: typeof StepSizes[number],
  count = 1,
  timeUnit?: keyof TimeDurations,
): Promise<XL1BlockRate> => {
  const end = start + step * count
  const range = asXL1BlockRange([start, end], true)

  return await calculateBlockRate(viewer, range, timeUnit)
}

export const calculateStepSizeRate = async (
  viewer: BlockViewer,
  start: XL1BlockNumber,
  stepIndex: number,
  count = 1,
  timeUnit?: keyof TimeDurations,
) => {
  assertEx(isValidStep(stepIndex), () => `Invalid step index: ${stepIndex}`)
  const step = StepSizes[stepIndex]
  return await stepRate(viewer, start, step, count, timeUnit)
}
