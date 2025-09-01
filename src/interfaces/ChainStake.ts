export interface ChainStakeInterface {
  active(): Promise<bigint>
  activeByAddressStaked(address: string): Promise<bigint>
  activeByStaker(address: string): Promise<bigint>
  pending(): Promise<bigint>
  pendingByStaker(staker: string): Promise<bigint>
  withdrawn(): Promise<bigint>
  withdrawnByStaker(staker: string): Promise<bigint>
}
