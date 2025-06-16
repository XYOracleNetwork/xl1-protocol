import type { ArchivistInstance, WriteArchivist } from '@xyo-network/archivist-model'
import type { WalletInstance } from '@xyo-network/wallet-model'

import type { EventingChainBlockNumberIterator } from '../iterator/index.ts'
import type { AccountBalanceService } from './AccountBalanceService.ts'
import type { BlockProducerService } from './BlockProducerService.ts'
import type { BlockRewardService } from './BlockRewardService.ts'
import type {
  ChainContractViewer, ChainInformation, ChainStaker, ChainStakeViewer,
} from './Chain/index.ts'
import type { ElectionService } from './Election.ts'
import type { StakeIntentService } from './StakeIntentService/index.ts'

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
   * The chain iterator
   */
  chainIterator?: EventingChainBlockNumberIterator
  chainStakeViewer: ChainStakeViewer
  chainStaker: ChainStaker
  chainSubmissionsArchivistWrite: WriteArchivist
  electionService: ElectionService
  producer: BlockProducerService
  rewardService: BlockRewardService
  /**
   * Services for working with staked intents
   */
  stakeIntentService: StakeIntentService
}
