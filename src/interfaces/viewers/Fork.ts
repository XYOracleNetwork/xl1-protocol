import type { Promisable } from '@xylabs/promise'

import type { ChainId } from '../../model/index.ts'

export type ForkHistory = Record<number, ChainId>

export interface ForkViewer {
  chainIdAtBlock(blockNumber: number): Promisable<ChainId | undefined>
  forkHistory(): Promisable<ForkHistory>
}
