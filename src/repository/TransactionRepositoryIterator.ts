import type { SignedHydratedTransactionWithStorageMeta, TransactionBoundWitness } from '../transaction/index.ts'
import type { IterableRepository } from './Repository.ts'

export interface TransactionRepositoryIterator extends IterableRepository<TransactionBoundWitness, SignedHydratedTransactionWithStorageMeta | undefined> {}
