import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isSignedTransactionBoundWitnessWithStorageMeta, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

/** @deprecated Use HydratedTransactionWithStorageMeta instead */
export type HydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

/** @deprecated Use isHydratedTransactionWithStorageMeta instead */
export const isHydratedTransaction = (
  value: unknown,
// eslint-disable-next-line sonarjs/deprecation
): value is HydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isSignedTransactionBoundWitnessWithStorageMeta(value[0])
  )
}

/** @deprecated Use asHydratedTransactionWithStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asHydratedTransaction = AsObjectFactory.create<HydratedTransaction>(
  // eslint-disable-next-line sonarjs/deprecation
  isHydratedTransaction,
)

export type UnsignedHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

export const isUnsignedHydratedTransaction = (
  value: unknown,
): value is UnsignedHydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isSignedTransactionBoundWitnessWithStorageMeta(value[0])
  )
}

export const asUnsignedHydratedTransaction = AsObjectFactory.create<UnsignedHydratedTransaction>(
  isUnsignedHydratedTransaction,
)
