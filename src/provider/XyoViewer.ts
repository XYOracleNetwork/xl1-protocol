import type {
  BalanceInterface, BlockInterface, ChainInterface,
  ForkInterface,
  StakeInterface,
  TransactionInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends BalanceInterface, ChainInterface, BlockInterface, TransactionInterface, StakeInterface, ForkInterface {}
