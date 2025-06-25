import type { HydratedTransaction } from '../transaction/index.ts'
import type { WriteRepository } from './Repository.ts'

export interface TransactionWriteRepository extends WriteRepository<HydratedTransaction, boolean> {}
