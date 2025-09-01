import type { Promisable } from '@xylabs/promise'

import type { ServiceInterface } from './Service.ts'

export interface BlockRewardService extends ServiceInterface {
  getRewardForBlock(block: bigint): Promisable<bigint>
}
