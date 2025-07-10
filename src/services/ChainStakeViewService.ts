import type { Promisable } from '@xylabs/promise'

export interface ChainStakeViewService {
  activeByAddressStaked(address: string): Promisable<bigint>
  activeByStaker(address: string): Promisable<bigint>
  pending(): Promisable<bigint>
  pendingByStaker(staker: string): Promisable<bigint>
  withdrawn(): Promisable<bigint>
  withdrawnByStaker(staker: string): Promisable<bigint>
}
