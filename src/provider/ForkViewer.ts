import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export type ForkHistory = Record<number, Address>

export interface ForkViewer {
  chainIdAtBlock(blockNumber: number): Promisable<Address>
  forkHistory(): Promisable<ForkHistory>
}
