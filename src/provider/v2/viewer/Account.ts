import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../../../payload/index.ts'
import type { Viewer } from './Viewer.ts'

export interface AccountViewer extends Viewer<Address> {
  balance(): Promisable<bigint>
  history(limit?: number, previous?: Hash): Promisable<Transfer[]>
}
