import { AsTypeFactory } from '@xylabs/object'

export const StepSizes = [10, 105, 1103, 11_576, 121_551, 1_276_282, 13_400_956] as const

export function isValidStep(step: unknown): step is number {
  if (typeof step === 'number' && Number.isInteger(step)) {
    return (step >= 0 && step < StepSizes.length)
  }
  return false
}

export const asValidStep = AsTypeFactory.create<number>(isValidStep)

export function stepSize(step: number): number {
  const validatedStep = asValidStep(step, () => `Invalid step size, must be an integer between 0 and ${StepSizes.length - 1}`)
  return StepSizes[validatedStep]
}
