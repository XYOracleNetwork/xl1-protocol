import type { WalletInstance } from '@xyo-network/wallet-model'

import type { MempoolRunner } from './runners/index.ts'
import type { BlockProducerService } from './services/index.ts'
import type {
  AccountBalanceViewer, BlockRewardViewer, BlockViewer, ChainContractViewer, ChainStakeViewer, MempoolViewer,
} from './viewers/index.ts'

export interface ChainServiceCollectionV2 {

  /**
   * The account which is used to sign transactions
   */
  account: WalletInstance
  /**
   * Services for working with account balances
   */
  balance: AccountBalanceViewer
  /**
   * The chain iterator
   */
  blockViewer?: BlockViewer
  /**
   * Service for viewing codified chain information
   * from a contract
   */
  chainContractViewer: ChainContractViewer

  /**
   * Service for viewing stake information
   */
  chainStakeViewer: ChainStakeViewer

  mempoolRunner: MempoolRunner
  mempoolViewer: MempoolViewer

  /**
   * The block producer service
   */
  producer: BlockProducerService
  /**
   * Service response for calculating block rewards
   */
  reward: BlockRewardViewer
}
