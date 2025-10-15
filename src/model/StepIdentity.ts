import type { Brand } from '@xylabs/typeof'

export interface StepIdentity {
  block: number
  step: number
}

/** @deprecated use StepIdentity instead */
export interface StepContext extends StepIdentity {}

// this string is the block and the step separated by a pipe
export type StepIdentityString = Brand<string, { readonly __stepIdentityString: true }>
