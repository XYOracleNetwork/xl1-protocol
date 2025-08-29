import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../block/index.ts'
import type { Chain } from '../model.ts'
import type { Transfer } from '../payload/index.ts'
import type { SignedHydratedTransaction } from '../transaction/index.ts'

export interface XyoViewer {
  accountBalance(address: Address): Promisable<bigint>
  accountHistory(address: Address): Promisable<[Hash /* block */, Hash /* transaction */, Transfer][]>

  blockByHash(hash: Hash): Promisable<HydratedBlock | null>
  blockByNumber(blockNumber: number): Promisable<HydratedBlock | null>
  blocksByHash(hash: Hash, limit?: number): Promisable<HydratedBlock[]>

  chainId(): Promisable<Chain>

  currentBlock(): Promisable<HydratedBlock>
  currentBlockHash(): Promisable<Hash>
  currentBlockNumber(): Promisable<number>

  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByHash(transactionHash: Hash): Promisable<SignedHydratedTransaction | null>
}
