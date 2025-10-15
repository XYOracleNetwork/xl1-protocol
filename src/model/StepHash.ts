import type { Hash } from '@xylabs/hex'
import type { Brand } from '@xylabs/typeof'

export interface StepHash {
  block: Hash
  step: number
}

// this string is the hash and the step separated by a pipe
export type StepHashString = Brand<string, { readonly __stepHashString: true }>
