import type { Promisable } from '@xylabs/promise'

import type { ChainContractViewer } from './ChainContractViewer.ts'

export interface ChainContractProvider extends ChainContractViewer {
  finalizeSlash(id: bigint): Promisable<boolean>
  initiateSlash(slot: bigint, amount: bigint): Promisable<bigint>
  voteSlashNo(amount: bigint): Promisable<boolean>
  voteSlashYes(amount: bigint): Promisable<boolean>
}
