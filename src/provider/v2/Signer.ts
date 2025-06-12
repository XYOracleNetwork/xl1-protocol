import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedTransaction } from '../../transaction/index.ts'

export interface Signer {
  address: Address
  sign(tx: HydratedTransaction): Promisable<Hash> // returns the hash of the resulting signed transaction
}
