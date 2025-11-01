import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type {
  BlockRange, RewardShare, StepIdentity, StepIdentityString,
} from '../../model/index.ts'
import type { AttoXL1 } from '../../xl1/index.ts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RecordKeyType<T = keyof any> = T extends keyof any ? T : never

export interface RewardsViewerTemplate<TOptions, TResult> {
  bonus(options?: TOptions): Promisable<TResult>
  claimed(options?: TOptions): Promisable<TResult>
  earned(options?: TOptions): Promisable<TResult>
  total(options?: TOptions): Promisable<TResult>
  unclaimed(options?: TOptions): Promisable<TResult>
}

export interface RewardsByIndexViewer<TOptions, TResultIndex extends RecordKeyType> extends RewardsViewerTemplate<TOptions, Record<TResultIndex, AttoXL1>> {}

export interface RewardsRangeOptions {
  range?: BlockRange
}

export interface RewardsByStepViewerOptions extends RewardsRangeOptions {
  steps?: StepIdentity[]
}

export interface RewardsByStakerViewerOptions extends RewardsRangeOptions {
  stakers?: Address[]
}

export interface RewardsByPositionViewerOptions extends RewardsRangeOptions {
  positions?: number[]
}

export interface RewardsByStepViewer extends RewardsByIndexViewer<RewardsByStepViewerOptions, StepIdentityString> {}
export interface RewardsByStakerViewer extends RewardsByIndexViewer<RewardsByStakerViewerOptions, Address> {}
export interface RewardsByPositionViewer extends RewardsByIndexViewer<RewardsByPositionViewerOptions, number> {}
export interface RewardsTotalViewer extends RewardsViewerTemplate<RewardsRangeOptions, AttoXL1> {}

export interface StepViewer {

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

export interface StepRewardsViewer {
  position(): Promisable<RewardsByPositionViewer>
  staker(): Promisable<RewardsByStakerViewer>
  step(): Promisable<RewardsByStepViewer>
  total(): Promisable<RewardsTotalViewer>
}

export interface NetworkStakeViewerFunctions {
  stake(blockNumber?: number): Promisable<bigint>
}

export interface NetworkStakeViewer extends NetworkStakeViewerFunctions {
  stepRewards(): Promisable<StepRewardsViewer>
}
