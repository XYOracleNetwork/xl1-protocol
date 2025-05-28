import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { NetworkStatus } from '../../../network/index.ts'
import type { AccountViewer } from './Account.ts'
import type { BlockViewer } from './Block.ts'
import type { Viewer } from './Viewer.ts'

export interface ChainViewer extends Viewer<Address> {
  account(address: Address): AccountViewer
  block(id: number | Hash): BlockViewer
  currentBlock(): Promisable<Hash>
  status(): NetworkStatus
}
