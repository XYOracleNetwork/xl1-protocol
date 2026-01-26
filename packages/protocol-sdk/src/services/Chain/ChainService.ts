import type { ChainContractViewer, ChainStakeViewer } from '../../model/index.ts'
import type { BaseChainService } from './BaseChainService.ts'

/** @deprecated use ChainContractViewer, StakeTotalsViewer, StakeRunner instead */
export interface ChainService extends Omit<ChainContractViewer, 'moniker'>, Omit<ChainStakeViewer, 'moniker'>, BaseChainService {}
