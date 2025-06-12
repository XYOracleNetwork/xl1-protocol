import type { Address } from '@xylabs/hex'

import type { ChainIdentification } from './ChainIdentification.ts'

export interface ChainContractViewer extends ChainIdentification {
  active(): Promise<bigint>
  forkedAtBlockNumber(): Promise<bigint>
  forkedAtHash(): Promise<bigint>
  forkedChainId(): Promise<Address>
  minWithdrawalBlocks(): Promise<bigint>
  rewardsContract(): Promise<string>
  stakingTokenAddress(): Promise<string>
}
