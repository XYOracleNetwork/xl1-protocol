import type { Promisable } from '@xylabs/promise'

import type { Chain } from '../../model.ts'

export interface ChainViewInterface {
  chainId(): Promisable<Chain>
}
