import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { SignedHydratedBlock } from '../../../block/index.ts'
import type { Viewer } from './Viewer.ts'

export interface ChainBlockViewer extends Viewer<Hash> {
  chain: Address
  hydrate(): Promisable<SignedHydratedBlock>
}
