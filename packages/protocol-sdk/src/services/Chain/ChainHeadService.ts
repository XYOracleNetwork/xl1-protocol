import type { Hash } from '@xylabs/sdk-js'

import type { BaseChainService } from './BaseChainService.ts'

export interface ChainHeadService extends BaseChainService {
  head: Hash | null
}
