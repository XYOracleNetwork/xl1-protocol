import type { Address } from '@xylabs/sdk-js'

import type { Provider } from '../model/index.ts'

export interface ChainContractViewerMethods {
  forkedAtBlockNumber(): Promise<bigint>
  forkedAtHash(): Promise<bigint>
  forkedChainId(): Promise<Address>
  minWithdrawalBlocks(): Promise<bigint>
  rewardsContract(): Promise<string>
  stakingTokenAddress(): Promise<string>
}

export const ChainContractViewerMoniker = 'ChainContractViewer' as const
export type ChainContractViewerMoniker = typeof ChainContractViewerMoniker

export interface ChainContractViewer extends ChainContractViewerMethods, Provider<ChainContractViewerMoniker> {}
