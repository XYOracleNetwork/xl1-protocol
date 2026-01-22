import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'
import type { ChainId } from '@xyo-network/xl1-protocol'

import type { Provider } from '../model/index.ts'

export interface ChainContractViewerMethods {
  chainId(): Promisable<ChainId>
  forkedAtBlockNumber(): Promisable<number>
  forkedAtHash(): Promisable<Hash>
  forkedChainId(): Promisable<ChainId>
  minWithdrawalBlocks(): Promisable<number>
  rewardsContract(): Promisable<Address>
  stakingTokenAddress(): Promisable<Address>
}

export const ChainContractViewerMoniker = 'ChainContractViewer' as const
export type ChainContractViewerMoniker = typeof ChainContractViewerMoniker

export interface ChainContractViewer extends ChainContractViewerMethods, Provider<ChainContractViewerMoniker> {
  chainIdAtBlockNumber(blockNumber: number): Promisable<ChainId>
  forkedChainContractViewer(): Promisable<ChainContractViewer>
}
