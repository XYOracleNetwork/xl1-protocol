import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewInterface,
  StakeViewInterface,
  TransactionViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewInterface, ForkViewInterface {}
