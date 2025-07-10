import type { Hash } from '@xylabs/hex'

import type { Service } from '../Service.ts'

export interface ChainBlocksService extends Service {
  head(): Promise<Hash>
}
