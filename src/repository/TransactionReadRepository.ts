import type { HydratedTransaction, TransactionBoundWitness } from '../protocol/index.ts'
import type { ReadRepository } from './Repository.ts'

export interface TransactionReadRepository extends ReadRepository<TransactionBoundWitness, HydratedTransaction> {}
