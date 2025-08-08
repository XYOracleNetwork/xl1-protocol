import { AsObjectFactory } from '@xylabs/object'
import { type Payload } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type AnyHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [T, P[]]

export const isAnyHydratedTransaction = (
  value: unknown,
): value is AnyHydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitness(value[0])
  )
}

export const asAnyHydratedTransaction = AsObjectFactory.create<AnyHydratedTransaction>(
  isAnyHydratedTransaction,
)
