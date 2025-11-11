import { AsTypeFactory } from '@xylabs/object'

import { asXL1BlockNumber, type XL1BlockNumber } from '../model/index.ts'

// StepsV2 are primorial(n+2) + 1, where n is the index of the step size
// primorial(n+2) = 2 → 2×3=6 → 6×5=30 → 30×7=210 → 210×11=2310

export const StepSizes: XL1BlockNumber[] = [
  asXL1BlockNumber(7, true),
  asXL1BlockNumber(31, true),
  asXL1BlockNumber(211, true),
  asXL1BlockNumber(2311, true),
  asXL1BlockNumber(30_031, true),
  asXL1BlockNumber(510_511, true),
  asXL1BlockNumber(9_699_691, true),
  asXL1BlockNumber(223_092_871, true),
  asXL1BlockNumber(6_469_693_231, true),
]

export function isValidStep(step: unknown): step is number {
  if (typeof step === 'number' && Number.isInteger(step)) {
    return ((step >= 0) && (step < StepSizes.length))
  }
  return false
}

export const asValidStep = AsTypeFactory.create<number>(isValidStep)

export function stepSize(step: number): number {
  const validatedStep = asValidStep(step, () => `Invalid step (${step}), must be an integer between 0 and ${StepSizes.length - 1}`, { required: true })
  return StepSizes[validatedStep]
}

export const StepRewardFractions = [
  [0n, 1n], // 0%
  [0n, 1n], // 0%
  [0n, 1n], // 0%
  [1n, 10_000n], // 0.01%
  [2n, 1000n], // 0.2%
  [3n, 100n], // 3%
  [45n, 100n], // 45%
] as const
