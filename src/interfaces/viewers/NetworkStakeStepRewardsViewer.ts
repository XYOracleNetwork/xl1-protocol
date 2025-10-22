import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type {
  BlockRange, RewardShare, StepIdentity, StepIdentityString,
} from '../../model/index.ts'

export interface NetworkStakeStepRewardsStakerViewer {
  // total amount claimed by a given staker for a given range
  claimed(staker: Address, range?: BlockRange): Promisable<bigint>

  // the step rewards for a specific network stakers for all of history
  reward(staker: Address, step: StepIdentity): Promisable<RewardShare>

  // the step rewards for a specific network stakers for all of history
  rewards(staker: Address, range?: BlockRange): Promisable<Record<StepIdentityString, RewardShare>>

  // total amount unclaimed by a given staker for a given range
  unclaimed(staker: Address, range?: BlockRange): Promisable<bigint>
}

export interface NetworkStakeStepRewardsStepViewer {

  // the predictable random number for a given step and block
  randomizer(step: StepIdentity): Promisable<bigint>

  // all the step rewards for all the network stakers for a given step
  rewards(step: StepIdentity): Promisable<Record<Address, RewardShare>>

  // total amount staked during a given step
  stake(step: StepIdentity): Promisable<bigint>

  // the total number of stakers for a given step and block
  stakers(step: StepIdentity): Promisable<Address[]>

  // total weight of all stakers during a given step
  weight(step: StepIdentity): Promisable<bigint>
}

export interface NetworkStakeStepRewardsPositionViewer {

  // total amount claimed by a given position for a given range
  claimed(position: number, range?: BlockRange): Promisable<bigint>

  // estimate the potential loss for removing a given position at a given step
  potentialLoss(position: number, step: StepIdentity): Promisable<bigint>

  // estimate the current reward for a given position at a given step
  reward(position: number, step: StepIdentity): Promisable<RewardShare>

  // total amount unclaimed by a given position for a given range
  unclaimed(position: number, range?: BlockRange): Promisable<bigint>
}

export interface NetworkStakeStepRewardsTotalViewer {
  // the available tokens in the overall reward pool
  available(range?: BlockRange): Promisable<bigint>
  claimed(range?: BlockRange): Promisable<bigint>
  unclaimed(range?: BlockRange): Promisable<bigint>
  unclaimedByStaker(address: Address, range?: BlockRange): Promisable<bigint>
}

export interface NetworkStakeStepRewardsViewer extends
  NetworkStakeStepRewardsPositionViewer
{
  position(): Promisable<NetworkStakeStepRewardsPositionViewer>
  staker(): Promisable<NetworkStakeStepRewardsStakerViewer>
  step(): Promisable<NetworkStakeStepRewardsStepViewer>
  total(): Promisable<NetworkStakeStepRewardsTotalViewer>
}
