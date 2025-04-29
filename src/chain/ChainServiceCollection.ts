import type { ArchivistInstance, WriteArchivist } from '@xyo-network/archivist-model'
import type { WalletInstance } from '@xyo-network/wallet-model'

import type { EventingChainBlockNumberIterator } from '../ChainIterator.ts'
import type {
  AccountBalanceService, BlockProducer,
  BlockRewardService, ChainContractViewer, ChainInformation, ChainStaker, ChainStakeViewer, ElectionService,
  StakeIntentService,
} from '../services/index.ts'

export interface ChainServiceCollection {

  account: WalletInstance
  /**
   * Services for working with account balances
   */
  balanceService: AccountBalanceService
  /**
   * The archivist which the chain data is stored in
   */
  chainArchivist: ArchivistInstance
  chainContractViewer: ChainContractViewer
  /**
   * Hydrated information about the chain
   */
  chainInformation: ChainInformation
  /**
   * The chain iterator
   */
  chainIterator?: EventingChainBlockNumberIterator
  chainStakeViewer: ChainStakeViewer
  chainStaker: ChainStaker
  chainSubmissionsArchivistWrite: WriteArchivist
  electionService: ElectionService
  producer: BlockProducer
  rewardService: BlockRewardService
  /**
   * Services for working with staked intents
   */
  stakeIntentService: StakeIntentService
}
