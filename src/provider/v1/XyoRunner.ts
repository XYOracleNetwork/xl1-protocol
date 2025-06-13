import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedTransaction } from '../../transaction/index.ts'

export interface XyoRunner {
  broadcastTransaction(transaction: HydratedTransaction): Promisable<Hash>
}
