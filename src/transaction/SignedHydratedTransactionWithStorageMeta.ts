import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import {
  isStorageMeta, type Payload, type WithStorageMeta,
} from '@xyo-network/payload-model'

import { isSignedHydratedTransaction } from './SignedHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type SignedHydratedTransactionWithStorageMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

export const isSignedHydratedTransactionWithStorageMeta = (
  value: unknown,
): value is SignedHydratedTransactionWithStorageMeta => {
  return (
    isSignedHydratedTransaction(value) && isStorageMeta(value[0]) && !value[1].some(v => !isStorageMeta(v))
  )
}

export const asSignedHydratedTransactionWithStorageMeta = AsObjectFactory.create<SignedHydratedTransactionWithStorageMeta>(
  isSignedHydratedTransactionWithStorageMeta,
)
