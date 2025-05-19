import type { HydratedTransaction, TransactionBoundWitness } from '#transaction'

import type { ReadRepository } from './Repository.ts'

export interface TransactionReadRepository extends ReadRepository<TransactionBoundWitness, HydratedTransaction> {}
