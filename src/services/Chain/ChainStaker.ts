export interface ChainStaker {
  addStake(staked: string, amount: bigint): Promise<boolean>
  removeStake(slot: bigint): Promise<boolean>
  withdrawStake(slot: bigint): Promise<boolean>
}
