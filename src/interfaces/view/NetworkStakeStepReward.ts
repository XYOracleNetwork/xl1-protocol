import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface StepContext {
  block: number
  step: number
}

export interface NetworkStakeStepAddressRewardViewInterface {
  // the step rewards for a specific network stakers for all of history
  networkStakeStepRewardAddressHistory(address: Address): Promisable<Record<Address, bigint>>

  // the step rewards for a specific network stakers for a given step and block
  networkStakeStepRewardAddressReward(context: StepContext, address: Address): Promisable<Record<Address, bigint>>

  // the shares for a specific network staker for a given step and block
  networkStakeStepRewardAddressShare(context: StepContext, address: Address): Promisable<[/* address shares */bigint, /* total shares */bigint]>

  // estimate the current reward weight for a given address at a given step
  networkStakeStepRewardWeightForAddress(context: StepContext, address: Address): Promisable<bigint>
}

export interface NetworkStakeStepPoolRewardViewInterface {

  // all the step rewards for all the network stakers for a given step and block
  networkStakeStepRewardPoolRewards(context: StepContext): Promisable<Record<Address, bigint>>

  // all the shares for all the network stakers for a given step and block
  networkStakeStepRewardPoolShares(context: StepContext): Promisable<Record<Address, bigint>>
}

export interface NetworkStakeStepRewardPositionViewInterface {
  // estimate the current weight for a given position at a given step
  networkStakeStepRewardPositionWeight(context: StepContext, position: number): Promisable<bigint>

  // estimate the potential loss for removing a given position at a given step
  networkStakeStepRewardPotentialPositionLoss(context: StepContext, position: number): Promisable<bigint>
}

export interface NetworkStakeStepRewardViewInterface extends
  NetworkStakeStepPoolRewardViewInterface,
  NetworkStakeStepAddressRewardViewInterface,
  NetworkStakeStepRewardPositionViewInterface
{
  networkStakeStepRewardClaimedByAddress(address: Address): Promisable<bigint>

  // estimate the total possible block rewards for a given step
  networkStakeStepRewardForStep(context: StepContext): Promisable<bigint>

  // the predictable random number for a given step and block
  networkStakeStepRewardRandomizer(context: StepContext): Promisable<bigint>

  // the total number of stakers for a given step and block
  networkStakeStepRewardStakerCount(context: StepContext): Promisable<number>

  networkStakeStepRewardUnclaimedByAddress(address: Address): Promisable<bigint>
}
