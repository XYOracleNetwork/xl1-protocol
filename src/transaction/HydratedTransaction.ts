import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import {
  type Payload, type WithHashStorageMeta, type WithStorageMeta,
} from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import {
  isTransactionBoundWitness, isTransactionBoundWitnessWithHashStorageMeta, isTransactionBoundWitnessWithStorageMeta, type TransactionBoundWitness,
} from './TransactionBoundWitness.ts'

export type HydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness, P extends Payload = Payload> = [T, P[]]

export const isHydratedTransaction = (
  value: unknown,
): value is HydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitness(value[0])
  )
}

export const asHydratedTransaction = AsObjectFactory.create<HydratedTransaction>(
  isHydratedTransaction,
)

export type HydratedTransactionWithStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithStorageMeta<T[0]>, WithStorageMeta<T[1][number]>[]]

export const isHydratedTransactionWithStorageMeta = (
  value: unknown,
): value is HydratedTransactionWithStorageMeta => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitnessWithStorageMeta(value[0])
  )
}

export const asHydratedTransactionWithStorageMeta = AsObjectFactory.create<HydratedTransactionWithStorageMeta>(
  isHydratedTransactionWithStorageMeta,
)

export type HydratedTransactionWithHashStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithHashStorageMeta<T[0]>, WithHashStorageMeta<T[1][number]>[]]

export const isHydratedTransactionWithHashStorageMeta = (
  value: unknown,
): value is HydratedTransactionWithHashStorageMeta => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitnessWithHashStorageMeta(value[0])
  )
}

export const asHydratedTransactionWithHashStorageMeta = AsObjectFactory.create<HydratedTransactionWithHashStorageMeta>(
  isHydratedTransactionWithHashStorageMeta,
)

export type SignedHydratedTransaction<T extends HydratedTransaction = HydratedTransaction> = [Signed<T[0]>, T[1][number][]] & HydratedTransaction

export type SignedHydratedTransactionWithStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithStorageMeta<Signed<T[0]>>, WithStorageMeta<T[1][number]>[]] & SignedHydratedTransaction<T> & HydratedTransaction

export type SignedHydratedTransactionWithHashStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithHashStorageMeta<Signed<T[0]>>, WithHashStorageMeta<T[1][number]>[]] & SignedHydratedTransaction<T> & HydratedTransaction
