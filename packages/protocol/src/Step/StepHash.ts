import type { Brand, Hash } from '@xylabs/sdk-js'

export interface StepHash {
  block: Hash
  step: number
}

// this string is the hash and the step separated by a pipe
export type StepHashString = Brand<string, { readonly __stepHashString: true }>
