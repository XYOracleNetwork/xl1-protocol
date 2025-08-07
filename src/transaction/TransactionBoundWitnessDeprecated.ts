import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import { isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

/** @deprecated use isSigned && isTransactionBoundWitness instead */
export const isSignedTransactionBoundWitness = (value: unknown): value is Signed<TransactionBoundWitness> => {
  return isTransactionBoundWitness(value) && isSigned(value)
}

/** @deprecated use isStorageMeta && isTransactionBoundWitness instead */
export const isTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isStorageMeta(value)

/** @deprecated use isHashStorageMeta && isTransactionBoundWitness instead */
export const isTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isHashStorageMeta(value)

/** @deprecated use isSigned && isStorageMeta && isTransactionBoundWitness instead */
export const isSignedTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<Signed<TransactionBoundWitness>> =>
  // eslint-disable-next-line sonarjs/deprecation
  isSignedTransactionBoundWitness(value)
  && isStorageMeta(value)

/** @deprecated use isSigned && isHashStorageMeta && isTransactionBoundWitness instead */
export const isSignedTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<Signed<TransactionBoundWitness>> =>
  // eslint-disable-next-line sonarjs/deprecation
  isSignedTransactionBoundWitness(value)
  && isHashStorageMeta(value)

/** @deprecated use asTransactionBoundWitness && asStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asTransactionBoundWitnessWithStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithStorageMeta)

/** @deprecated use asTransactionBoundWitness && asHashStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asTransactionBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithHashStorageMeta)
