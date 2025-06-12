import type { StakeContractViewer } from './StakeContractViewer.ts'

export interface StakeContractProvider extends StakeContractViewer {
  addStake(staked: string, amount: bigint): Promise<boolean>
  removeStake(slot: bigint): Promise<boolean>
  withdrawStake(slot: bigint): Promise<boolean>
}
