import type { Address, Promisable } from '@xylabs/sdk-js'

import type { Position, Provider } from '../model/index.ts'
import type { StakeEventsViewer } from './StakeEvents.ts'

export interface StakeViewerProperties {
  minWithdrawalBlocks: number
  rewardsContract: Address
  stakeEvents: StakeEventsViewer
  stakingTokenAddress: Address
}

export interface StakeViewerMethods {
  stakeById(id: number): Promisable<Position>
  stakeByStaker(staker: Address, slot: number): Promisable<Position>
  stakesByStaked(staked: Address): Promisable<Position[]>
  stakesByStaker(staker: Address): Promisable<Position[]>
}

export const StakeViewerMoniker = 'StakeViewer' as const
export type StakeViewerMoniker = typeof StakeViewerMoniker

export interface StakeViewer extends StakeViewerMethods, StakeViewerProperties, Provider<StakeViewerMoniker> {
  active(time?: number): Promisable<bigint>
  activeByAddressStaked(address: string, time?: number): Promisable<bigint>
  activeByStaker(address: string, time?: number): Promisable<bigint>
  pending(time?: number): Promisable<bigint>
  pendingByStaker(staker: string, time?: number): Promisable<bigint>
  withdrawn(time?: number): Promisable<bigint>
  withdrawnByStaker(staker: string, time?: number): Promisable<bigint>
}

export const StakeRunnerMoniker = 'StakeRunner' as const
export type StakeRunnerMoniker = typeof StakeRunnerMoniker

export interface StakeRunner extends Provider<StakeRunnerMoniker> {
  addStake(staked: string, amount: bigint): Promise<boolean>
  removeStake(slot: bigint): Promise<boolean>
  withdrawStake(slot: bigint): Promise<boolean>
}
