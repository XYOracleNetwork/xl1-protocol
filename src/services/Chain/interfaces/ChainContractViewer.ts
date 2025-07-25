import type { Address } from '@xylabs/hex'

export interface ChainContractViewer {
  active(): Promise<bigint>
  forkedAtBlockNumber(): Promise<bigint>
  forkedAtHash(): Promise<bigint>
  forkedChainId(): Promise<Address>
  minWithdrawalBlocks(): Promise<bigint>
  rewardsContract(): Promise<string>
  stakingTokenAddress(): Promise<string>
}
