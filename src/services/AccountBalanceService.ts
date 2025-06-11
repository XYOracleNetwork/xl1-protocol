import type {
  Address, Hash, Hex,
} from '@xylabs/hex'

import type { Service } from './Service.ts'

export interface AccountBalanceService extends Service {
  getBalanceValue?: (address: Address) => bigint
  getBalanceValues?: Record<Address, bigint>

  getBalance(address: Address): Hex
  getBalances(): Record<Address, Hex>
  sync(head: Hash): Promise<void>
}
