import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'
import type { ChainId, XL1BlockNumber } from '@xyo-network/xl1-protocol'

import type { Provider } from '../Provider.ts'

export interface ChainContractViewerMethods {
  chainId(): Promisable<ChainId>
  forkedAtBlockNumber(): Promisable<XL1BlockNumber | null>
  forkedAtHash(): Promisable<Hash | null>
  forkedChainId(): Promisable<ChainId | null>
  minWithdrawalBlocks(): Promisable<number>
  rewardsContract(): Promisable<Address>
  stakingTokenAddress(): Promisable<Address>
}

export const ChainContractViewerMoniker = 'ChainContractViewer' as const
export type ChainContractViewerMoniker = typeof ChainContractViewerMoniker

export interface ChainContractViewer extends ChainContractViewerMethods, Provider<ChainContractViewerMoniker> {
  chainIdAtBlockNumber(blockNumber: XL1BlockNumber | 'latest'): Promisable<ChainId>
  forkedChainContractViewer(): Promisable<ChainContractViewer | null>
}
