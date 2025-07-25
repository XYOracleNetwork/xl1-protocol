import type { ArchivistInstance, WriteArchivist } from '@xyo-network/archivist-model'
import type { WalletInstance } from '@xyo-network/wallet-model'

import type { AccountBalanceServiceV2 } from './AccountBalanceService.ts'
import type { BlockProducerService } from './BlockProducerService.ts'
import type { BlockRewardService } from './BlockRewardService.ts'
import type {
  ChainContractViewer, ChainStaker, ChainStakeViewer,
} from './Chain/index.ts'
import type { EventingChainBlockNumberIteratorService } from './ChainIterator/index.ts'
import type { ElectionService } from './Election.ts'
import type { StakeIntentService } from './StakeIntentService/index.ts'

/** @deprecated use from @xyo-network/xl1-protocol-sdk instead */
export interface ChainServiceCollectionV2 {

  /**
   * The account which is used to sign transactions
   */
  account: WalletInstance
  /**
   * Services for working with account balances
   */
  balanceService: AccountBalanceServiceV2
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
  chainIterator?: EventingChainBlockNumberIteratorService
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
