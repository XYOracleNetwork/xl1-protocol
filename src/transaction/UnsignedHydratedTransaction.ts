import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type UnsignedHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [T, P[]]

export const isUnsignedHydratedTransaction = (
  value: unknown,
): value is UnsignedHydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitness(value[0])
  )
}

export const asUnsignedHydratedTransaction = AsObjectFactory.create<UnsignedHydratedTransaction>(
  isUnsignedHydratedTransaction,
)
