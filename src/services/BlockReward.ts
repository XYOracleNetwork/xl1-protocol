import type { Promisable } from '@xylabs/promise'

import type { Service } from './Service.ts'

export interface BlockRewardService extends Service {
  getRewardForBlock(block: bigint): Promisable<bigint>
}
