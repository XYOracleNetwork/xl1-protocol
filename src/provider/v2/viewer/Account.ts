import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../../payload/index.ts'

export interface AccountViewer {
  balance(): Promisable<bigint>
  history(limit?: number, previous?: Hash): Promisable<Transfer[]>
}
