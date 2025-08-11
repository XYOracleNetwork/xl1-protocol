import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import { isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export const isSignedTransactionBoundWitness = (value: unknown): value is Signed<TransactionBoundWitness> => {
  return isTransactionBoundWitness(value) && isSigned(value)
}

export const isTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isStorageMeta(value)

export const isTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isHashStorageMeta(value)

export const isSignedTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<Signed<TransactionBoundWitness>> =>

  isSignedTransactionBoundWitness(value)
  && isStorageMeta(value)

export const isSignedTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<Signed<TransactionBoundWitness>> =>

  isSignedTransactionBoundWitness(value)
  && isHashStorageMeta(value)

export const asTransactionBoundWitnessWithStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithStorageMeta)

export const asTransactionBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithHashStorageMeta)
