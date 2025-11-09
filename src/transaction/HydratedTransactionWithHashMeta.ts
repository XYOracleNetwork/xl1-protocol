import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import {
  isStorageMeta, type Payload, type WithHashMeta,
} from '@xyo-network/payload-model'

import { isAnyHydratedTransaction } from './AnyHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type HydratedTransactionWithHashMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithHashMeta<Signed<T>>, WithHashMeta<P>[]]

export const isHydratedTransactionWithHashMeta = (
  value: unknown,
): value is HydratedTransactionWithHashMeta => {
  return (
    isAnyHydratedTransaction(value) && isStorageMeta(value[0]) && !value[1].some(v => !isStorageMeta(v))
  )
}

export const asHydratedTransactionWithHashMeta = AsObjectFactory.create<HydratedTransactionWithHashMeta>(
  isHydratedTransactionWithHashMeta,
)
