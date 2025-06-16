import type { Hash } from '@xylabs/hex'

import type { BaseChainService } from './BaseChainService.ts'

export interface ChainHeadService extends BaseChainService {
  head: Hash | null
}
