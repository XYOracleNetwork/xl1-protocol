import type { Promisable } from '@xylabs/promise'

import type { BlockRewardService } from './BlockRewardService.ts'

export interface BlockRewardServiceV2 extends BlockRewardService {
  // The amount of xl1 to send to the step pool from the block reward
  getRewardForStepPool(block: bigint): Promisable<bigint>
}
