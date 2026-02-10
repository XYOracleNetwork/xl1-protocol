import type { Address, Promisable } from '@xylabs/sdk-js'

import type { Provider } from '../Provider.ts'

export interface StakeTotalsViewerMethods {
  active(time?: number): Promisable<bigint>
  activeByStaked(staked: Address, time?: number): Promisable<bigint>
  activeByStaker(address: Address, time?: number): Promisable<bigint>
  pending(time?: number): Promisable<bigint>
  pendingByStaker(staker: Address, time?: number): Promisable<bigint>
  withdrawn(time?: number): Promisable<bigint>
  withdrawnByStaker(staker: Address, time?: number): Promisable<bigint>
}

export const StakeTotalsViewerMoniker = 'StakeTotalsViewer' as const
export type StakeTotalsViewerMoniker = typeof StakeTotalsViewerMoniker

export interface StakeTotalsViewer extends StakeTotalsViewerMethods, Provider<StakeTotalsViewerMoniker> {}
