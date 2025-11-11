import { type Brand, isUndefined } from '@xylabs/typeof'

import { toXL1BlockNumber, type XL1BlockNumber } from './BlockNumber/index.ts'

export interface StepIdentity {
  block: XL1BlockNumber
  // the index of the step into the StepSize array
  step: number
}

/** @deprecated use StepIdentity instead */
export interface StepContext extends StepIdentity {}

// this string is the block and the step separated by a pipe
export type StepIdentityString = Brand<string, { readonly __stepIdentityString: true }>

function tryParseInt(value: string): number | undefined {
  // Prevent coercion of empty strings to 0
  if (value === '') return undefined
  // Parse number
  const num = Number(value)
  // Check if integer
  return Number.isInteger(num) ? num : undefined
}

export const asStepIdentity = (stepIdentityString: string): StepIdentity | undefined => {
  try {
    const [blockNumberString, stepString] = stepIdentityString.split('|')
    if (isUndefined(blockNumberString) || isUndefined(stepString)) {
      return undefined
    }
    const step = tryParseInt(stepString)
    const block = toXL1BlockNumber(blockNumberString)
    if (isUndefined(block) || isUndefined(step)) {
      return undefined
    }

    return { block, step }
  } catch {
    return undefined
  }
}
