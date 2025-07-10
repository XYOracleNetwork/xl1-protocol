import type { Promisable } from '@xylabs/promise'

import type { ChainStakeViewService } from './ChainStakeViewService.ts'

export interface ChainStakeService extends ChainStakeViewService {
  addStake(staked: string, amount: bigint): Promisable<boolean>
  removeStake(slot: bigint): Promisable<boolean>
  withdrawStake(slot: bigint): Promisable<boolean>
}
