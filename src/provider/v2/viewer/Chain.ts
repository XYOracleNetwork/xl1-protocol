import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { SignedHydratedBlock } from '../../../block/index.ts'
import type { NetworkStatus } from '../../../network/index.ts'
import type { ChainBlockViewer } from './Block.ts'
import type { ChainAccountViewer } from './ChainAccount.ts'
import type { Viewer } from './Viewer.ts'

export interface ChainViewer extends Viewer<Address> {
  account(address: Address): ChainAccountViewer
  block(hash: Hash): ChainBlockViewer
  currentBlock(): Promisable<SignedHydratedBlock>
  status(): NetworkStatus
}
