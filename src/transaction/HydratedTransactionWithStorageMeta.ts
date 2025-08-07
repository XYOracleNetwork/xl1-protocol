import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import {
  isStorageMeta, type Payload, type WithStorageMeta,
} from '@xyo-network/payload-model'

import { isAnyHydratedTransaction } from './AnyHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type HydratedTransactionWithStorageMeta<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

export const isHydratedTransactionWithStorageMeta = (
  value: unknown,
): value is HydratedTransactionWithStorageMeta => {
  return (
    isAnyHydratedTransaction(value) && isStorageMeta(value[0]) && !value[1].some(v => !isStorageMeta(v))
  )
}

export const asHydratedTransactionWithStorageMeta = AsObjectFactory.create<HydratedTransactionWithStorageMeta>(
  isHydratedTransactionWithStorageMeta,
)
