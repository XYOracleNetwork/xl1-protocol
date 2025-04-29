import type {
  Address, Hash, Hex,
} from '@xylabs/hex'

export interface AccountBalanceService {
  getBalance(address: Address): Hex
  getBalances(): Record<Address, Hex>
  sync(head: Hash): Promise<void>
}
