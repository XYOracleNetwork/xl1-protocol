import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../payload/index.ts'
import type { SignedHydratedBlock, SignedHydratedTransaction } from '../../protocol/index.ts'

export interface XyoViewer {
  accountBalance: (address: Address) => Promisable<bigint>
  accountHistory?: (address: Address) => Promisable<Transfer>

  blockByHash(hash: Hash): Promisable<SignedHydratedBlock | null>
  blockByNumber(blockNumber: number): Promisable<SignedHydratedBlock | null>
  blocksByHash(hash: Hash, limit?: number): Promisable<SignedHydratedBlock[]>

  chainId(): Promisable<Address>

  currentBlock(): Promisable<SignedHydratedBlock>
  currentBlockHash(): Promisable<Hash>
  currentBlockNumber(): Promisable<number>

  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<SignedHydratedTransaction | null>
  transactionByHash(transactionHash: Hash): Promisable<SignedHydratedTransaction | null>
}
