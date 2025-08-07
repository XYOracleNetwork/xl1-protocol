import { AsObjectFactory } from '@xylabs/object'
import { isUnsigned } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import { isAnyHydratedTransaction } from './AnyHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type UnsignedHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [T, P[]]

export const isUnsignedHydratedTransaction = (
  value: unknown,
): value is UnsignedHydratedTransaction => {
  return (
    isAnyHydratedTransaction(value) && isUnsigned(value[0])
  )
}

export const asUnsignedHydratedTransaction = AsObjectFactory.create<UnsignedHydratedTransaction>(
  isUnsignedHydratedTransaction,
)
