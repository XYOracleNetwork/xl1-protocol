import type { SignedHydratedTransaction } from '../transaction/index.ts'
import type { WriteRepository } from './Repository.ts'

export interface TransactionWriteRepository extends WriteRepository<SignedHydratedTransaction, boolean> {}
