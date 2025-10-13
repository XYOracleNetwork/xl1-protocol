import type { Promisable } from '@xylabs/promise'

import type { ChainId } from '../../model.ts'

export interface ChainViewInterface {
  chainId(): Promisable<ChainId>
}
