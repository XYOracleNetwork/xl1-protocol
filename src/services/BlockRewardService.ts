import type { Promisable } from '@xylabs/promise'

import type { ServiceInterface } from './Service.ts'

export interface BlockRewardService extends ServiceInterface {
  // The amount of xl1 to send to the producer from the block reward
  getRewardForBlock(block: bigint): Promisable<bigint>
}
