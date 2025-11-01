import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { RewardShare, StepIdentity } from '../../../model/index.ts'

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
