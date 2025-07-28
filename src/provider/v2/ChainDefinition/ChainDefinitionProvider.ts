import type { Hex } from '@xylabs/hex'

import type { ChainContractProvider } from './ChainContractProvider.ts'
import type { ChainContractViewer } from './ChainContractViewer.ts'
import type { StakeContractProvider, StakeContractViewer } from './Stake/index.ts'

export interface ChainDefinitionViewer<TChainContractViewer extends ChainContractViewer = ChainContractViewer,
  TStakeContractViewer extends StakeContractViewer = StakeContractViewer> {
  chainId: Hex
  contract: TChainContractViewer
  stake: TStakeContractViewer
}

export interface ChainDefinitionProvider extends ChainDefinitionViewer<ChainContractProvider, StakeContractProvider> {}
