import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { PositionId, StepIdentity } from '../../../model/index.ts'
import type { Position } from '../Stake.ts'

export interface PagedPositionsOptions {
  cursor?: PositionId
  limit?: number
}

export interface PagedStakersOptions {
  cursor?: Address
  limit?: number
}

export interface StepViewerMethods {

  // the total number of positions for a given step
  positionCount(step: StepIdentity): Promisable<number>

  positions(step: StepIdentity, options?: PagedPositionsOptions): Promisable<Position[]>

  // the predictable random number for a given step
  randomizer(step: StepIdentity): Promisable<bigint>

  // total amount staked during a given step
  stake(step: StepIdentity): Promisable<bigint>

  // the total number of stakers for a given step
  stakerCount(step: StepIdentity): Promisable<number>

  stakers(step: StepIdentity, options?: PagedStakersOptions): Promisable<Address[]>

  // total weight of all stakers during a given step
  weight(step: StepIdentity): Promisable<bigint>
}

export interface StepViewer extends StepViewerMethods {}
