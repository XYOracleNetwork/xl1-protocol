import type { ArchivistInstance, WriteArchivist } from '@xyo-network/archivist-model'
import type { WalletInstance } from '@xyo-network/wallet-model'

import type { EventingChainBlockNumberIterator } from '../iterator/index.ts'
import type { AccountBalanceService } from './AccountBalanceService.ts'
import type { BlockProducerService } from './BlockProducerService.ts'
import type { BlockRewardService } from './BlockRewardService.ts'
import type {
  ChainContractViewer, ChainStaker, ChainStakeViewer,
} from './Chain/index.ts'
import type { ElectionService } from './Election.ts'
import type { StakeIntentService } from './StakeIntentService/index.ts'

export interface ChainServiceCollection {

  /**
   * The account which is used to sign transactions
   */
  account: WalletInstance
  /**
   * Services for working with account balances
   */
  balanceService: AccountBalanceService
  /**
   * The archivist which the chain data is stored in
   */
  chainArchivist: ArchivistInstance
  /**
   * Service for viewing codified chain information
   * from a contract
   */
  chainContractViewer: ChainContractViewer
  /**
   * The chain iterator
   */
  chainIterator?: EventingChainBlockNumberIterator
  /**
   * Service for viewing stake information
   */
  chainStakeViewer: ChainStakeViewer
  /**
   * Service for staking
   */
  chainStaker: ChainStaker
  /**
   * The archivist which the chain submissions are stored in
   */
  chainSubmissionsArchivistWrite: WriteArchivist
  /**
   * Service for determining leader election
   */
  electionService: ElectionService
  /**
   * The archivist which the pending transactions are stored
   * as bundled transactions
   */
  pendingBundledTransactionsArchivistWrite: ArchivistInstance
  /**
   * The block producer service
   */
  producer: BlockProducerService
  /**
   * Service response for calculating block rewards
   */
  rewardService: BlockRewardService
  /**
   * Services for working with staked intents
   */
  stakeIntentService: StakeIntentService
}
