import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewer,
  NetworkStakeStepRewardViewInterface,
  StakeViewer,
  TransactionViewInterface, TransferBalancesViewInterface, TransferBalanceViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceViewInterface, TransferBalanceViewInterface,
  TransferBalancesViewInterface, NetworkStakeStepRewardViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewer, ForkViewer {}
