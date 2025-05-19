import type { HydratedTransaction } from '#transaction'

import type { WriteRepository } from './Repository.ts'

export interface TransactionWriteRepository extends WriteRepository<HydratedTransaction, boolean> {}
