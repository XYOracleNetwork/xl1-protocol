import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import type {
  Payload,
  WithHashMeta,
} from '@xyo-network/payload-model'
import { isStorageMeta } from '@xyo-network/payload-model'

import { isSignedHydratedTransaction } from './SignedHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type SignedHydratedTransactionWithHashMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithHashMeta<Signed<T>>, WithHashMeta<P>[]]

export const isSignedHydratedTransactionWithHashMeta = (
  value: unknown,
): value is SignedHydratedTransactionWithHashMeta => {
  return (
    isSignedHydratedTransaction(value) && isStorageMeta(value[0]) && !value[1].some(v => !isStorageMeta(v))
  )
}

export const asSignedHydratedTransactionWithHashMeta = AsObjectFactory.create<SignedHydratedTransactionWithHashMeta>(
  isSignedHydratedTransactionWithHashMeta,
)
