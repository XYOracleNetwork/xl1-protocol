import type { Address } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness, Signed } from '@xyo-network/boundwitness-model'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

import type { BlockDuration } from '../fields/index.ts'
import type { FromFields, OptionalExecutable } from '../payload/index.ts'
import type { TransactionFeesFields } from './TransactionFeesFields.ts'

export interface TransactionBoundWitnessFields extends BlockDuration, TransactionFeesFields {
  chain: Address
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

export const isSignedTransactionBoundWitness = (value: unknown): value is Signed<TransactionBoundWitness> => {
  return isTransactionBoundWitness(value) && isSigned(value)
}

export const isSigned = <T extends BoundWitness = BoundWitness>(value: unknown): value is Signed<T> =>
  isBoundWitness(value)
  && value.$signatures.length === value.addresses.length
  && value.addresses.length > 0

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

export const asTransactionBoundWitness = AsObjectFactory.create(isTransactionBoundWitness)

export const asTransactionBoundWitnessWithStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithStorageMeta)

export const asTransactionBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isTransactionBoundWitnessWithHashStorageMeta)
