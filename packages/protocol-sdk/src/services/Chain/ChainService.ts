import type { ChainContractViewer, ChainStakeViewer } from '../../viewers/index.ts'
import type { BaseChainService } from './BaseChainService.ts'

export interface ChainService extends Omit<ChainContractViewer, 'moniker'>, Omit<ChainStakeViewer, 'moniker'>, BaseChainService {}
