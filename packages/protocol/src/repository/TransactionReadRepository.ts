import type { SignedHydratedTransaction, TransactionBoundWitness } from '../zod/index.ts'
import type { ReadRepository } from './Repository.ts'

export interface TransactionReadRepository extends ReadRepository<TransactionBoundWitness, SignedHydratedTransaction | undefined> {}
