import type { HydratedTransaction, TransactionBoundWitness } from '#transaction'

import type { IterableRepository } from './Repository.ts'

export interface TransactionRepositoryIterator extends IterableRepository<TransactionBoundWitness, HydratedTransaction> {}
