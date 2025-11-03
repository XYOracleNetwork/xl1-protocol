import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Position } from './Stake.ts'

export interface StakeViewer {
  stakeById(id: number): Promisable<Position>
  stakeByStaker(staker: Address, slot: number): Promisable<Position>
  /* @deprecated use stakesByStaker */
  stakedByStaker(staker: Address): Promisable<Address[]>
  stakesByStaked(staked: Address): Promisable<Position[]>
  stakesByStaker(staker: Address): Promisable<Position[]>
}
