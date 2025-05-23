import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { NetworkStatus } from '#network'

import type { AccountViewer } from './Account.ts'
import type { BlockViewer } from './Block.ts'

export interface ChainViewer {
  value: Address
  account(address: Address): AccountViewer
  block(id: number | Hash): BlockViewer
  currentBlock(): Promisable<Hash>
  status(): NetworkStatus
}
