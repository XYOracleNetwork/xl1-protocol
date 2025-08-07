import { AsObjectFactory } from '@xylabs/object'
import { isSigned } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type SignedHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [T, P[]]

export const isSignedHydratedTransaction = (
  value: unknown,
): value is SignedHydratedTransaction => {
  return (
    isHydratedBoundWitness(value) && isTransactionBoundWitness(value[0]) && isSigned(value[0])
  )
}

export const asSignedHydratedTransaction = AsObjectFactory.create<SignedHydratedTransaction>(
  isSignedHydratedTransaction,
)
