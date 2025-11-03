import type {
  AccountBalanceViewInterface, BlockViewInterface, ChainViewInterface,
  ForkViewer,
  NetworkStakeStepRewardViewInterface,
  NetworkStakeViewer,
  StakeViewer,
  TransactionViewInterface, TransferBalanceViewInterface,
} from '../interfaces/index.ts'

export interface XyoViewerMethods extends AccountBalanceViewInterface, TransferBalanceViewInterface,
  NetworkStakeStepRewardViewInterface,
  ChainViewInterface, BlockViewInterface, TransactionViewInterface, StakeViewer, ForkViewer {
}

export interface XyoViewer extends XyoViewerMethods {
  networkStakeViewer?: NetworkStakeViewer
}
