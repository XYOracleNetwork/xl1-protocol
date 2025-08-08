import { AsObjectFactory } from '@xylabs/object'
import { isSigned, type Signed } from '@xyo-network/boundwitness-model'
import {
  isStorageMeta, type Payload, type WithStorageMeta,
} from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

/** @deprecated Use HydratedTransactionWithStorageMeta instead */
export type HydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

/** @deprecated Use isHydratedTransactionWithStorageMeta instead */
export const isHydratedTransaction = (
  value: unknown,
// eslint-disable-next-line sonarjs/deprecation
): value is HydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitness(value[0]) && isSigned(value[0]) && isStorageMeta(value[0])
  )
}

/** @deprecated Use asHydratedTransactionWithStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asHydratedTransaction = AsObjectFactory.create<HydratedTransaction>(
  // eslint-disable-next-line sonarjs/deprecation
  isHydratedTransaction,
)
