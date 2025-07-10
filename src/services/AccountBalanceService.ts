import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { AttoXL1 } from '../xl1/index.ts'
import type { Service } from './Service.ts'

/** @public */
export interface AccountBalanceService extends Service {
  balances(head: Hash, addresses: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}
