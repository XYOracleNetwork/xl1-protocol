import type { Address } from '@xylabs/hex'

export interface StakeContractViewer {
  id: Address
  activeByAddressStaked(address: string): Promise<bigint>
  activeByStaker(address: string): Promise<bigint>
  pending(): Promise<bigint>
  pendingByStaker(staker: string): Promise<bigint>
  withdrawn(): Promise<bigint>
  withdrawnByStaker(staker: string): Promise<bigint>
}
