import type { Service } from '../Service.ts'
import type {
  ChainContractViewer, ChainInformation, ChainStaker, ChainStakeViewer,
} from './interfaces/index.ts'

export interface ChainService extends ChainInformation, ChainContractViewer, ChainStakeViewer, ChainStaker, Service {}
