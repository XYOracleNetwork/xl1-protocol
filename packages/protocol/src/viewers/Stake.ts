import type { Address, Promisable } from '@xylabs/sdk-js'

import type { Position } from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { StakeEventsViewer } from './StakeEvents.ts'

export interface StakeViewerProperties {
  stakeEvents: StakeEventsViewer
}

export interface StakeViewerMethods {
  minWithdrawalBlocks(): Promisable<number>
  rewardsContract(): Promisable<Address>
  stakeById(id: number): Promisable<Position>
  stakeByStaker(staker: Address, slot: number): Promisable<Position>
  stakesByStaked(staked: Address): Promisable<Position[]>
  stakesByStaker(staker: Address): Promisable<Position[]>
  stakingTokenAddress(): Promisable<Address>
}

export const StakeViewerMoniker = 'StakeViewer' as const
export type StakeViewerMoniker = typeof StakeViewerMoniker

export interface StakeViewer extends StakeViewerMethods, StakeViewerProperties, Provider<StakeViewerMoniker> {
  activeStakes(): Promisable<Position[]>
  removedStakes(): Promisable<Position[]>
  withdrawnStakes(): Promisable<Position[]>
}

export const StakeRunnerMoniker = 'StakeRunner' as const
export type StakeRunnerMoniker = typeof StakeRunnerMoniker

export interface StakeRunner extends Provider<StakeRunnerMoniker> {
  addStake(staked: string, amount: bigint): Promise<boolean>
  removeStake(slot: bigint): Promise<boolean>
  withdrawStake(slot: bigint): Promise<boolean>
}
