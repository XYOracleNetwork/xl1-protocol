import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isSignedTransactionBoundWitnessWithStorageMeta, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type HydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

export const isHydratedTransaction = (
  value: unknown,
): value is HydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isSignedTransactionBoundWitnessWithStorageMeta(value[0])
  )
}

export const asHydratedTransaction = AsObjectFactory.create<HydratedTransaction>(
  isHydratedTransaction,
)
