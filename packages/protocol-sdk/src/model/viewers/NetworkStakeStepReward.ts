import type { Address, Promisable } from '@xylabs/sdk-js'
import type {
  AttoXL1, StepIdentity, StepIdentityString,
} from '@xyo-network/xl1-protocol'

import type { Provider } from '../Provider.ts'

export interface NetworkStakeStepAddressRewardViewerMethods {
  // the step rewards for a specific network stakers for all of history
  networkStakeStepRewardAddressHistory(address: Address): Promisable<Record<Address, AttoXL1>>

  // the step rewards for a specific network stakers for a given step and block
  networkStakeStepRewardAddressReward(context: StepIdentity, address: Address): Promisable<Record<Address, AttoXL1>>

  // the shares for a specific network staker for a given step and block
  networkStakeStepRewardAddressShare(context: StepIdentity, address: Address): Promisable<[/* address shares */bigint, /* total shares */bigint]>

  // estimate the current reward weight for a given address at a given step
  networkStakeStepRewardWeightForAddress(context: StepIdentity, address: Address): Promisable<bigint>
}

export interface NetworkStakeStepPoolRewardViewerMethods {

  // all the step rewards for all the network stakers for a given step and block
  networkStakeStepRewardPoolRewards(context: StepIdentity): Promisable<Record<Address, AttoXL1>>

  // all the shares for all the network stakers for a given step and block
  networkStakeStepRewardPoolShares(context: StepIdentity): Promisable<Record<Address, bigint>>
}

export interface NetworkStakeStepRewardPositionViewerMethods {
  // estimate the current weight for a given position at a given step
  networkStakeStepRewardPositionWeight(context: StepIdentity, position: number): Promisable<bigint>

  // estimate the potential loss for removing a given position at a given step
  networkStakeStepRewardPotentialPositionLoss(context: StepIdentity, position: number): Promisable<AttoXL1>
}

export interface NetworkStakeStepRewardViewerMethods extends
  NetworkStakeStepPoolRewardViewerMethods,
  NetworkStakeStepAddressRewardViewerMethods,
  NetworkStakeStepRewardPositionViewerMethods
{
  networkStakeStepRewardClaimedByAddress(address: Address): Promisable<AttoXL1>

  // the share & total rewards for a given position
  networkStakeStepRewardForPosition(position: number, range: [number, number]): Promisable<[AttoXL1, AttoXL1]>

  // estimate the total possible block rewards for a given step
  networkStakeStepRewardForStep(context: StepIdentity): Promisable<AttoXL1>

  // the share & total rewards for a given step and block for a given position
  networkStakeStepRewardForStepForPosition(context: StepIdentity, position: number): Promisable<[AttoXL1, AttoXL1]>

  // the predictable random number for a given step and block
  networkStakeStepRewardRandomizer(context: StepIdentity): Promisable<AttoXL1>

  // the total number of stakers for a given step and block
  networkStakeStepRewardStakerCount(context: StepIdentity): Promisable<number>

  networkStakeStepRewardUnclaimedByAddress(address: Address): Promisable<AttoXL1>

  // the share & total rewards for a given position for each step in range
  networkStakeStepRewardsForPosition(position: number,
    range: [number, number]): Promisable<Record<StepIdentityString, [AttoXL1, AttoXL1]>>

  // the total rewards for a given range
  networkStakeStepRewardsForRange(range: [number, number]): Promisable<AttoXL1>

  // the total rewards for a given range and step level
  networkStakeStepRewardsForStepLevel(stepLevel: number, range: [number, number]): Promisable<AttoXL1>
}

export const NetworkStakeStepRewardViewerMoniker = 'NetworkStakeStepRewardViewer' as const
export type NetworkStakeStepRewardViewerMoniker = typeof NetworkStakeStepRewardViewerMoniker

export interface NetworkStakeStepRewardViewer extends NetworkStakeStepRewardViewerMethods, Provider<NetworkStakeStepRewardViewerMoniker> {}
