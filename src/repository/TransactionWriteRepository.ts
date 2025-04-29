import type { HydratedTransaction } from '../protocol/index.ts'
import type { WriteRepository } from './Repository.ts'

export interface TransactionWriteRepository extends WriteRepository<HydratedTransaction, boolean> {}
