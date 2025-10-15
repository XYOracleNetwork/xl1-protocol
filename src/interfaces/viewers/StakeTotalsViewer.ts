import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface StakeTotalsViewer {
  active(): Promisable<bigint>
  activeByStaked(staked: Address): Promisable<bigint>
  activeByStaker(address: Address): Promisable<bigint>
  pending(): Promisable<bigint>
  pendingByStaker(staker: Address): Promisable<bigint>
  withdrawn(): Promisable<bigint>
  withdrawnByStaker(staker: Address): Promisable<bigint>
}
