import type { HydratedTransaction, TransactionBoundWitness } from '../protocol/index.ts'
import type { IterableRepository } from './Repository.ts'

export interface TransactionRepositoryIterator extends IterableRepository<TransactionBoundWitness, HydratedTransaction> {}
