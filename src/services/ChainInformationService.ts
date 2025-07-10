import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface ChainInformationService {
  active(): Promisable<bigint>
  forkedAtBlockNumber(): Promisable<bigint>
  forkedAtHash(): Promisable<bigint>
  forkedChainId(): Promisable<Address>
  minWithdrawalBlocks(): Promisable<bigint>
  rewardsContract(): Promisable<string>
  stakingTokenAddress(): Promisable<string>
}
