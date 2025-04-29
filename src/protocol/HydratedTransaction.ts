import type { Signed } from '@xyo-network/boundwitness-model'
import type {
  Payload, WithHashStorageMeta, WithStorageMeta,
} from '@xyo-network/payload-model'

import type { TransactionBoundWitness } from './TransactionBoundWitness.ts'

export type HydratedTransaction<T extends TransactionBoundWitness = TransactionBoundWitness, P extends Payload = Payload> = [T, P[]]

export type HydratedTransactionWithStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithStorageMeta<T[0]>, WithStorageMeta<T[1][number]>[]]

export type HydratedTransactionWithHashStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithHashStorageMeta<T[0]>, WithHashStorageMeta<T[1][number]>[]]

export type SignedHydratedTransaction<T extends HydratedTransaction = HydratedTransaction> = [Signed<T[0]>, T[1][number][]] & HydratedTransaction

export type SignedHydratedTransactionWithStorageMeta<T extends HydratedTransaction = HydratedTransaction>
 = [WithStorageMeta<Signed<T[0]>>, WithStorageMeta<T[1][number]>[]] & SignedHydratedTransaction<T> & HydratedTransaction
