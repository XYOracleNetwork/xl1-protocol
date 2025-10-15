import type { Promisable } from '@xylabs/promise'

import type { ChainId } from '../../model/index.ts'

export interface ChainViewInterface {
  chainId(): Promisable<ChainId>
}
