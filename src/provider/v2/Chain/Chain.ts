import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../../../block/index.ts'
import type { NetworkStatus } from '../../../network/index.ts'
import type { ChainDefinitionProvider, ChainDefinitionViewer } from '../ChainDefinition/index.ts'
import type { ChainPendingTransactionsViewer } from '../viewer/index.ts'
import type { ChainBlockViewer } from './Block.ts'
import type { ChainAccountViewer } from './ChainAccount.ts'

export interface ChainViewer<TChainDefinitionViewer extends ChainDefinitionViewer = ChainDefinitionViewer> {
  definition: TChainDefinitionViewer
  id: Address
  account(address: Address): ChainAccountViewer
  block(hash: Hash): ChainBlockViewer
  currentBlock(): Promisable<HydratedBlock>
  pendingTransactions(): ChainPendingTransactionsViewer
  status(): NetworkStatus
}

export interface ChainProvider extends ChainViewer<ChainDefinitionProvider> {

}
