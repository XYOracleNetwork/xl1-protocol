import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import { isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashMeta, isStorageMeta } from '@xyo-network/payload-model'

import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export const isSignedTransactionBoundWitness = (value: unknown): value is Signed<TransactionBoundWitness> => {
  return isTransactionBoundWitness(value) && isSigned(value)
}

export const isTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isStorageMeta(value)

export const isTransactionBoundWitnessWithHashMeta = (value: unknown): value is WithHashMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isHashMeta(value)

export const isSignedTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<Signed<TransactionBoundWitness>> =>

  isSignedTransactionBoundWitness(value)
  && isStorageMeta(value)

export const isSignedTransactionBoundWitnessWithHashMeta = (value: unknown): value is WithHashMeta<Signed<TransactionBoundWitness>> =>

  isSignedTransactionBoundWitness(value)
  && isHashMeta(value)

export const asTransactionBoundWitnessWithStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithStorageMeta)

export const asTransactionBoundWitnessWithHashMeta = AsObjectFactory.create(isTransactionBoundWitnessWithHashMeta)
