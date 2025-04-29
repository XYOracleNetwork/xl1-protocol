import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { SignedHydratedTransaction } from '../protocol/index.ts'

export interface XyoRunner {
  broadcastTransaction(transaction: SignedHydratedTransaction): Promisable<Hash>
}
