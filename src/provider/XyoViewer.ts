import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewer,
  NetworkStakeStepRewardViewInterface,
  StakeViewer,
  TransactionViewInterface, TransferBalanceViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceViewInterface, TransferBalanceViewInterface,
  NetworkStakeStepRewardViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewer, ForkViewer {}
