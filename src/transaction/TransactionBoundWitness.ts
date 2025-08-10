import {
  type Address, type Hex, isAddress,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import { isBoundWitness } from '@xyo-network/boundwitness-model'

import type { BlockDuration } from '../fields/index.ts'
import type { FromFields, OptionalExecutable } from '../payload/index.ts'
import type { TransactionFeesFields } from './TransactionFeesFields.ts'

export interface TransactionBoundWitnessFields extends BlockDuration, TransactionFeesFields {
  chain: Hex | Address & { __chain: true }
}

export type TransactionBoundWitness = BoundWitness<TransactionBoundWitnessFields & OptionalExecutable & FromFields>

export const isTransactionBoundWitness = (value: unknown): value is TransactionBoundWitness => {
  const typedObj = value as TransactionBoundWitness
  return isBoundWitness(value)
    && isAddress(typedObj.chain)
    && typedObj.fees !== undefined
    && typedObj.exp !== undefined
    && typedObj.nbf !== undefined
}

export const asTransactionBoundWitness = AsObjectFactory.create(isTransactionBoundWitness)
