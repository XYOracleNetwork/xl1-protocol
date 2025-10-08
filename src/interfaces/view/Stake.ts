import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { AttoXL1 } from '../../xl1/index.ts'

export type Stake = {
  // the block number when the stake was added
  addBlock: number
  // the amount that is staked
  amount: AttoXL1
  // the unique id for the stake item
  id: number
  // the block number when the stake was removed (set to 0 if not removed)
  removeBlock: number
  // the address that is being staked
  staked: Address
  // the address that owns the stake
  staker: Address
  // the block number when the stake was withdrawn (set to 0 if not withdrawn)
  withdrawBlock: number
}

export interface StakeViewInterface {
  stakeById(id: number): Promisable<Stake>
  stakeByStaker(staker: Address, slot: number): Promisable<Stake>
  stakedByStaker(staker: Address): Promisable<Address[]>
  stakesByStaked(staked: Address): Promisable<Stake[]>
  stakesByStaker(staker: Address): Promisable<Stake[]>
}
