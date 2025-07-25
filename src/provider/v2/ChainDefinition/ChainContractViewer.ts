import type { Hex } from '@xylabs/hex'

export interface ChainContractViewer {
  chainId: Hex
  active(): Promise<bigint>
  forkedAtBlockNumber(): Promise<bigint>
  forkedAtHash(): Promise<bigint>
  forkedChainId(): Promise<Hex>
  minWithdrawalBlocks(): Promise<bigint>
  rewardsContract(): Promise<string>
  stakingTokenAddress(): Promise<string>
}
