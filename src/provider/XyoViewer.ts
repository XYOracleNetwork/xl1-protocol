import type {
  AccountBalanceInterface, BlockInterface, ChainInterface,
  ForkInterface,
  StakeInterface,
  TransactionInterface,
} from '../interfaces/index.ts'

export interface XyoViewer extends AccountBalanceInterface, ChainInterface, BlockInterface, TransactionInterface, StakeInterface, ForkInterface {}
