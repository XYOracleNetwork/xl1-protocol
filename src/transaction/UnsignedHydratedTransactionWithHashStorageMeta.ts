import { AsObjectFactory } from '@xylabs/object'
import type { Unsigned } from '@xyo-network/boundwitness-model'
import {
  isHashStorageMeta,
  type Payload, type WithHashStorageMeta,
} from '@xyo-network/payload-model'

import { isSignedHydratedTransaction } from './SignedHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type UnsignedHydratedTransactionWithHashStorageMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithHashStorageMeta<Unsigned<T>>, WithHashStorageMeta<P>[]]

export const isUnsignedHydratedTransactionWithHashStorageMeta = (
  value: unknown,
): value is UnsignedHydratedTransactionWithHashStorageMeta => {
  return (
    isSignedHydratedTransaction(value) && isHashStorageMeta(value[0]) && !value[1].some(v => !isHashStorageMeta(v))
  )
}

export const asUnsignedHydratedTransactionWithHashStorageMeta = AsObjectFactory.create<UnsignedHydratedTransactionWithHashStorageMeta>(
  isUnsignedHydratedTransactionWithHashStorageMeta,
)
