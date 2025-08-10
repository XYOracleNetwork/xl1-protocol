import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import { isSigned } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import { isAnyHydratedTransaction } from './AnyHydratedTransaction.ts'
import { type TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type SignedHydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness,
  P extends Payload = Payload> = [Signed<T>, P[]]

export const isSignedHydratedTransaction = (
  value: unknown,
): value is SignedHydratedTransaction => {
  return (
    isAnyHydratedTransaction(value) && isSigned(value[0])
  )
}

export const asSignedHydratedTransaction = AsObjectFactory.create<SignedHydratedTransaction>(
  isSignedHydratedTransaction,
)
