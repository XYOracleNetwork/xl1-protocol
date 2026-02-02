import type { Address, Promisable } from '@xylabs/sdk-js'

import type {
  Position, PositionId, StepIdentity,
} from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { NetworkStakeStepRewardsViewer } from './NetworkStake/index.ts'

export interface PagedPositionsOptions {
  cursor?: PositionId
  limit?: number
}

export interface PagedStakersOptions {
  cursor?: Address
  limit?: number
}

export interface StepStatistics {
  endTime: number
  startTime: number
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

  // if no positionId is supplied, returns the total stake weight for the step
  weight(step: StepIdentity, positionId?: PositionId): Promisable<bigint>
}

export const StepViewerMoniker = 'StepViewer' as const
export type StepViewerMoniker = typeof StepViewerMoniker

export interface StepViewer extends StepViewerMethods, Provider<StepViewerMoniker> {
  rewards?: NetworkStakeStepRewardsViewer
}
