import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../block/index.ts'

export interface BlockInterface {
  blockByHash(hash: Hash): Promisable<HydratedBlock | null>
  blockByNumber(blockNumber: number): Promisable<HydratedBlock | null>
  blocksByHash(hash: Hash, limit?: number): Promisable<HydratedBlock[]>

  currentBlock(): Promisable<HydratedBlock>
  currentBlockHash(): Promisable<Hash>
  currentBlockNumber(): Promisable<number>
}
