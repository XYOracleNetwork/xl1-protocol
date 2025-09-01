import type { Promisable } from '@xylabs/promise'

import type { Chain } from '../model.ts'

export interface ChainInterface {
  chainId(): Promisable<Chain>
}
