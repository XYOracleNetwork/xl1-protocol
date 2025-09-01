import type {
  Address, Hash, Hex,
} from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { AttoXL1 } from '../xl1/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface AccountBalanceProvider {
  getBalanceValue: (address: Address) => bigint
}

export interface AccountBalanceService extends AccountBalanceProvider, ServiceInterface {
  getBalanceValues?: Record<Address, bigint>

  getBalance(address: Address): Hex
  getBalances(): Record<Address, Hex>
}

export interface AccountBalanceServiceV2 extends ServiceInterface {
  balances(head: Hash, addresses: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}
