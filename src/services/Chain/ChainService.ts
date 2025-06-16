import type { BaseChainService } from './BaseChainService.ts'
import type {
  ChainContractViewer, ChainInformation, ChainStaker, ChainStakeViewer,
} from './interfaces/index.ts'

export interface ChainService extends ChainInformation, ChainContractViewer, ChainStakeViewer, ChainStaker, BaseChainService {}
