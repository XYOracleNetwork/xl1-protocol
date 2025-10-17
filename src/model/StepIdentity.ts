import type { Brand } from '@xylabs/typeof'

import type { XL1BlockNumber } from './BlockNumber/index.ts'

export interface StepIdentity {
  block: XL1BlockNumber
  step: number
}

/** @deprecated use StepIdentity instead */
export interface StepContext extends StepIdentity {}

// this string is the block and the step separated by a pipe
export type StepIdentityString = Brand<string, { readonly __stepIdentityString: true }>
