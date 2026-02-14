import type { SignedHydratedTransaction } from '../model/index.ts'
import type { TransactionBoundWitness } from '../transaction/index.ts'
import type { ReadRepository } from './Repository.ts'

export interface TransactionReadRepository extends ReadRepository<TransactionBoundWitness, SignedHydratedTransaction | undefined> {}
