import type {
  Address, Hash, Hex,
} from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { AttoXL1 } from '../xl1/index.ts'
import type { Service } from './Service.ts'

export interface AccountBalanceService extends Service {
  getBalanceValue?: (address: Address) => bigint
  getBalanceValues?: Record<Address, bigint>

  getBalance(address: Address): Hex
  getBalances(): Record<Address, Hex>
  sync(head: Hash): Promise<void>
}

export interface AccountBalanceServiceV2 extends Service {
  balances(head: Hash, addresses: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}
