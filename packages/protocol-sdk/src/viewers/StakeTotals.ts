import type { Address, Promisable } from '@xylabs/sdk-js'

import type { Provider } from '../model/index.ts'

export interface StakeTotalsViewerMethods {
  active(): Promisable<bigint>
  activeByStaked(staked: Address): Promisable<bigint>
  activeByStaker(address: Address): Promisable<bigint>
  pending(): Promisable<bigint>
  pendingByStaker(staker: Address): Promisable<bigint>
  withdrawn(): Promisable<bigint>
  withdrawnByStaker(staker: Address): Promisable<bigint>
}

export const StakeTotalsViewerMoniker = 'StakeTotalsViewer' as const
export type StakeTotalsViewerMoniker = typeof StakeTotalsViewerMoniker

export interface StakeTotalsViewer extends StakeTotalsViewerMethods, Provider<StakeTotalsViewerMoniker> {}
