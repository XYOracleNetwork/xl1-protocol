import type { Address, Promisable } from '@xylabs/sdk-js'

import type { Position, Provider } from '../model/index.ts'
import type { StakeEventsViewer } from './StakeEvents.ts'

export interface StakeViewerProperties {
  stakeEvents: StakeEventsViewer
}

export interface StakeViewerMethods {
  active(time?: number): Promisable<bigint>
  activeByAddressStaked(address: string, time?: number): Promisable<bigint>
  activeByStaker(address: string, time?: number): Promisable<bigint>
  minWithdrawalBlocks(): Promisable<number>
  pending(time?: number): Promisable<bigint>
  pendingByStaker(staker: string, time?: number): Promisable<bigint>
  rewardsContract(): Promisable<Address>
  stakeById(id: number): Promisable<Position>
  stakeByStaker(staker: Address, slot: number): Promisable<Position>
  stakesByStaked(staked: Address): Promisable<Position[]>
  stakesByStaker(staker: Address): Promisable<Position[]>
  stakingTokenAddress(): Promisable<Address>
  withdrawn(time?: number): Promisable<bigint>
  withdrawnByStaker(staker: string, time?: number): Promisable<bigint>
}

export const StakeViewerMoniker = 'StakeViewer' as const
export type StakeViewerMoniker = typeof StakeViewerMoniker

export interface StakeViewer extends StakeViewerMethods, StakeViewerProperties, Provider<StakeViewerMoniker> {

}

export const StakeRunnerMoniker = 'StakeRunner' as const
export type StakeRunnerMoniker = typeof StakeRunnerMoniker

export interface StakeRunner extends Provider<StakeRunnerMoniker> {
  addStake(staked: string, amount: bigint): Promise<boolean>
  removeStake(slot: bigint): Promise<boolean>
  withdrawStake(slot: bigint): Promise<boolean>
}
