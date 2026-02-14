import type { SignedHydratedTransactionWithStorageMeta } from '../model/index.ts'
import type { TransactionBoundWitness } from '../transaction/index.ts'
import type { IterableRepository } from './Repository.ts'

export interface TransactionRepositoryIterator extends IterableRepository<TransactionBoundWitness, SignedHydratedTransactionWithStorageMeta | undefined> {}
