import type {
  Address, Hash, Hex,
} from '@xylabs/hex'

export interface AccountBalanceService {
  getBalanceValue?: (address: Address) => bigint
  getBalanceValues?: Record<Address, bigint>

  getBalance(address: Address): Hex
  getBalances(): Record<Address, Hex>
  sync(head: Hash): Promise<void>
}
