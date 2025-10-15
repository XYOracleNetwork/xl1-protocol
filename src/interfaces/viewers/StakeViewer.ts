import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Stake } from './Stake.ts'

export interface StakeViewer {
  stakeById(id: number): Promisable<Stake>
  stakeByStaker(staker: Address, slot: number): Promisable<Stake>
  /* @deprecated use stakesByStaker */
  stakedByStaker(staker: Address): Promisable<Address[]>
  stakesByStaked(staked: Address): Promisable<Stake[]>
  stakesByStaker(staker: Address): Promisable<Stake[]>
}
