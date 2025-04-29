import type { Service } from '../Service.ts'
import type { ChainContractViewer } from './ChainContractViewer.ts'
import type { ChainInformation } from './ChainInformation.ts'
import type { ChainStaker } from './ChainStaker.ts'
import type { ChainStakeViewer } from './ChainStakeViewer.ts'

export interface ChainService extends ChainInformation, ChainContractViewer, ChainStakeViewer, ChainStaker, Service {}
