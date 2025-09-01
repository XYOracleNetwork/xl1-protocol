import type { Address, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export type Stake = {
  // the block number when the stake was added
  addBlock: number
  // the amount that is staked
  amount: Hex
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

export interface StakeInterface {
  stakeByAddress(address: Address, slot: number): Promisable<Stake>
  stakeById(id: number): Promisable<Stake>
}
