/* eslint-disable @typescript-eslint/member-ordering */
import type { Payload } from '@xyo-network/sdk-js'

import type { UnsignedHydratedTransaction } from '../model/index.ts'

export interface TransactionHelper {
  // build tx, sign tx, send tx
  addPayloadsToChain(onChain: Payload[], offChain: Payload[]): void

  // sign tx, send tx
  addUnsignedTransactionToChain(tx: UnsignedHydratedTransaction): void

  // send tx (primitive)
  addSignedTransactionToChain(tx: UnsignedHydratedTransaction): void
}
