import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { SignedHydratedBlock } from '../../../block/index.ts'

export interface ChainBlockViewer {
  chain: Address
  hash: Hash
  hydrate(): Promisable<SignedHydratedBlock>
}
