import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewInterface,
  NetworkStakeStepRewardViewInterface,
  StakeViewInterface,
  TransactionViewInterface, TransferBalanceViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceViewInterface, TransferBalanceViewInterface, NetworkStakeStepRewardViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewInterface, ForkViewInterface {}
