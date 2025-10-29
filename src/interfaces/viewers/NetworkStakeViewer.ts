import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type {
  BlockRange, RewardShare, StepIdentity, StepIdentityString,
} from '../../model/index.ts'

export interface RewardsViewer<TIndex> {
  claimed(index: TIndex, range?: BlockRange): Promisable<bigint>
  reward(index: TIndex, step: StepIdentity): Promisable<RewardShare>
  rewards(index: TIndex, range?: BlockRange): Promisable<Record<StepIdentityString, RewardShare>>
  unclaimed(index: TIndex, range?: BlockRange): Promisable<bigint>
}

export interface RewardsStakerViewer extends RewardsViewer<Address> {}

export interface RewardsStepViewer {

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

export interface RewardsPositionViewer {

  // total amount claimed by a given position for a given range
  claimed(position: number, range?: BlockRange): Promisable<bigint>

  // estimate the current reward for a given position at a given step
  reward(position: number, step: StepIdentity): Promisable<RewardShare>

  // the step rewards for a specific network stakers for all of history
  rewards(staker: Address, range?: BlockRange): Promisable<Record<StepIdentityString, RewardShare>>

  // total amount unclaimed by a given position for a given range
  unclaimed(position: number, range?: BlockRange): Promisable<bigint>
}

export interface RewardsTotalViewer {
  // the available tokens in the overall reward pool
  available(range?: BlockRange): Promisable<bigint>
  claimed(range?: BlockRange): Promisable<bigint>
  earned(range?: BlockRange): Promisable<bigint>
  unclaimed(range?: BlockRange): Promisable<bigint>
}

export interface StepRewardsViewer {
  position(): Promisable<RewardsPositionViewer>
  staker(): Promisable<RewardsViewer<Address>>
  step(): Promisable<RewardsViewer<StepIdentity>>
  total(): Promisable<RewardsTotalViewer>
}

export interface NetworkStakeViewer {
  stepRewards(): Promisable<StepRewardsViewer>
}
