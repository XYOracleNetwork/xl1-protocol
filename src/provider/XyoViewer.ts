import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewInterface,
  StakeViewInterface,
  TransactionViewInterface, TransferBalanceViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceViewInterface, TransferBalanceViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewInterface, ForkViewInterface {}
