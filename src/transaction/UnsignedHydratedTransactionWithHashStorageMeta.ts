import { AsObjectFactory } from '@xylabs/object'
import type { Unsigned } from '@xyo-network/boundwitness-model'
import {
  isHashMeta,
  type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'

import { isSignedHydratedTransaction } from './SignedHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type UnsignedHydratedTransactionWithHashMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithHashMeta<Unsigned<T>>, WithHashMeta<P>[]]

export const isUnsignedHydratedTransactionWithHashMeta = (
  value: unknown,
): value is UnsignedHydratedTransactionWithHashMeta => {
  return (
    isSignedHydratedTransaction(value) && isHashMeta(value[0]) && !value[1].some(v => !isHashMeta(v))
  )
}

export const asUnsignedHydratedTransactionWithHashMeta = AsObjectFactory.create<UnsignedHydratedTransactionWithHashMeta>(
  isUnsignedHydratedTransactionWithHashMeta,
)
