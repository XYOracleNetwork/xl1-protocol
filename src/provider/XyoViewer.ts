import type {
  Address, Hash, Hex,
} from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../block/index.ts'
import type { Transfer } from '../payload/index.ts'
import type { HydratedTransaction, TransactionBoundWitness } from '../transaction/index.ts'

export interface XyoViewer {
  accountBalance: (address: Address) => Promisable<bigint>
  accountHistory: (address: Address) => Promisable<[TransactionBoundWitness[], Transfer[]]>

  blockByHash(hash: Hash): Promisable<HydratedBlock | null>
  blockByNumber(blockNumber: number): Promisable<HydratedBlock | null>
  blocksByHash(hash: Hash, limit?: number): Promisable<HydratedBlock[]>

  chainId(): Promisable<Hex>

  currentBlock(): Promisable<HydratedBlock>
  currentBlockHash(): Promisable<Hash>
  currentBlockNumber(): Promisable<number>

  transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promisable<HydratedTransaction | null>
  transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promisable<HydratedTransaction | null>
  transactionByHash(transactionHash: Hash): Promisable<HydratedTransaction | null>
}
