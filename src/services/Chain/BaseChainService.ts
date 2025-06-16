import type { Address } from '@xylabs/hex'

import type { Service } from '../Service.ts'

export interface BaseChainService extends Service {
  chainId: Address
}
