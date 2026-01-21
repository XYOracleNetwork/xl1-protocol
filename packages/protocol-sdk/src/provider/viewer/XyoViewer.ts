import type { Address, Promisable } from '@xylabs/sdk-js'
import type { AttoXL1 } from '@xyo-network/xl1-protocol'

import type { ChainQualifiedConfig, Provider } from '../../model/index.ts'
import type {
  AccountBalanceHistoryItem,
  AccountBalanceViewer,
  BlockViewer,
  BlockViewerMethods,
  ForkViewerMethods,
  MempoolViewer,
  NetworkStakeStepRewardViewerMethods,
  StakeViewer,
  StakeViewerMethods,
  StepViewer,
  TimeSyncViewer,
  TransactionViewerMethods,
} from '../../viewers/index.ts'
import type { NetworkStakeViewer } from './NetworkStake/index.ts'

export interface XyoViewerMethods extends
  NetworkStakeStepRewardViewerMethods, BlockViewerMethods,
  TransactionViewerMethods, Omit<
    StakeViewerMethods, 'minWithdrawalBlocks' | 'rewardsContract' | 'stakingTokenAddress' | 'active'
    | 'activeByAddressStaked' | 'activeByStaker' | 'pending' | 'pendingByStaker' | 'withdrawn' | 'withdrawnByStaker'
  >, ForkViewerMethods {
  /** @deprecated Use .account.balance.accountBalance instead */
  accountBalance(address: Address, config?: ChainQualifiedConfig): Promisable<AttoXL1>
  /** @deprecated Use .account.balance.accountBalanceHistory instead */
  accountBalanceHistory(address: Address, config?: ChainQualifiedConfig): Promisable<AccountBalanceHistoryItem[]>
}

export const XyoViewerMoniker = 'XyoViewer' as const
export type XyoViewerMoniker = typeof XyoViewerMoniker

export interface XyoViewer extends Omit<BlockViewer, 'moniker'>, XyoViewerMethods,
  Omit<
    StakeViewerMethods, 'moniker' | 'minWithdrawalBlocks' | 'rewardsContract' | 'stakingTokenAddress' | 'active'
    | 'activeByAddressStaked' | 'activeByStaker' | 'pending' | 'pendingByStaker' | 'withdrawn' | 'withdrawnByStaker'
  >, Provider<XyoViewerMoniker> {
  account: {
    balance: AccountBalanceViewer
  }
  block: BlockViewer
  mempool: MempoolViewer
  networkStake: NetworkStakeViewer
  stake: StakeViewer
  step: StepViewer
  time: TimeSyncViewer
}
