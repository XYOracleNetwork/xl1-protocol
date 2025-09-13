import { AsTypeFactory } from '@xylabs/object'

// StepsV2 are primorial(n+2) + 1, where n is the index of the step size
// primorial(n+2) = 2 → 2×3=6 → 6×5=30 → 30×7=210 → 210×11=2310

export const StepSizes = [7, 31, 211, 2311, 30_031, 510_511, 9_699_691, 223_092_871, 6_469_693_231] as const

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
  [0n / 1n], // 0%
  [0n / 1n], // 0%
  [0n / 1n], // 0%
  [1n / 10_000n], // 0.01%
  [2n / 1000n], // 0.2%
  [3n / 100n], // 3%
  [45n / 100n], // 45%
] as const
