import type { Promisable } from '@xylabs/promise'

import type { ChainId } from '../../model.ts'

export type ForkHistory = Record<number, ChainId>

export interface ForkViewInterface {
  chainIdAtBlock(blockNumber: number): Promisable<ChainId | undefined>
  forkHistory(): Promisable<ForkHistory>
}
