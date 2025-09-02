import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface NetworkStakeStepAddressRewardViewInterface {
  claimedRewards(address: Address): Promisable<bigint>

  // the step rewards for a specific network stakers for a given step and block
  networkStakeStepAddressReward(address: Address, step: number, block: number): Promisable<Record<Address, bigint>>

  // the step rewards for a specific network stakers for all of history
  networkStakeStepRewardAddressHistory(address: Address): Promisable<Record<Address, bigint>>

  // the shares for a specific network staker for a given step and block
  networkStakeStepRewardAddressShare(address: Address, step: number, block: number): Promisable<[/* address shares */bigint, /* total shares */bigint]>

  unclaimedRewards(address: Address): Promisable<bigint>
}

export interface NetworkStakeStepPoolRewardViewInterface {

  // all the shares for all the network stakers for a given step and block
  networkStakeStepPoolRewardShares(step: number, block: number): Promisable<Record<Address, bigint>>

  // all the step rewards for all the network stakers for a given step and block
  networkStakeStepPoolRewards(step: number, block: number): Promisable<Record<Address, bigint>>
}

export interface NetworkStakeStepRewardViewInterface extends NetworkStakeStepPoolRewardViewInterface, NetworkStakeStepAddressRewardViewInterface {
  // the predictable random number for a given step and block
  networkStakeStepRewardRandomizer(step: number, block: number): Promisable<bigint>
}
