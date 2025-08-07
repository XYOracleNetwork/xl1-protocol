import type { Hex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness, Signed } from '@xyo-network/boundwitness-model'
import { isBoundWitness, isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

import type { BlockDuration } from '../fields/index.ts'
import type { FromFields, OptionalExecutable } from '../payload/index.ts'
import type { TransactionFeesFields } from './TransactionFeesFields.ts'

export interface TransactionBoundWitnessFields extends BlockDuration, TransactionFeesFields {
  chain: Hex
}

export type TransactionBoundWitness = BoundWitness<TransactionBoundWitnessFields & OptionalExecutable & FromFields>

export const isTransactionBoundWitness = (value: unknown): value is TransactionBoundWitness => {
  const typedObj = value as TransactionBoundWitness
  return isBoundWitness(value)
    && typedObj.chain !== undefined
    && typedObj.fees !== undefined
    && typedObj.exp !== undefined
    && typedObj.nbf !== undefined
}

/** @deprecated use isSigned instead */
export const isSignedTransactionBoundWitness = (value: unknown): value is Signed<TransactionBoundWitness> => {
  return isTransactionBoundWitness(value) && isSigned(value)
}

/** @deprecated use isStorageMeta instead */
export const isTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isStorageMeta(value)

/** @deprecated use isHashStorageMeta instead */
export const isTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<TransactionBoundWitness> =>
  isTransactionBoundWitness(value)
  && isHashStorageMeta(value)

/** @deprecated use isSigned && isStorageMeta instead */
export const isSignedTransactionBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<Signed<TransactionBoundWitness>> =>
  // eslint-disable-next-line sonarjs/deprecation
  isSignedTransactionBoundWitness(value)
  && isStorageMeta(value)

/** @deprecated use isSigned && isHashStorageMeta instead */
export const isSignedTransactionBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<Signed<TransactionBoundWitness>> =>
  // eslint-disable-next-line sonarjs/deprecation
  isSignedTransactionBoundWitness(value)
  && isHashStorageMeta(value)

export const asTransactionBoundWitness = AsObjectFactory.create(isTransactionBoundWitness)

/** @deprecated use isSigned && asStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asTransactionBoundWitnessWithStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithStorageMeta)

/** @deprecated use isSigned && asHashStorageMeta instead */
// eslint-disable-next-line sonarjs/deprecation
export const asTransactionBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithHashStorageMeta)
