import type { BaseChainService } from './BaseChainService.ts'
import type {
  ChainContractViewer, ChainStaker, ChainStakeViewer,
} from './interfaces/index.ts'

export interface ChainService extends ChainContractViewer, ChainStakeViewer, ChainStaker, BaseChainService {}
