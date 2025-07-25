import type { Hash, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedTransaction } from '../../transaction/index.ts'
import type { Signer } from './Signer.ts'

export interface Runner extends Signer {
  chainId: Hex
  send(tx: HydratedTransaction): Promisable<Hash> // returns the hash of the resulting signed transaction
}
