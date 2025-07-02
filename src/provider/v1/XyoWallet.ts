import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

/** @deprecated  - use XyoHost instead */
export interface XyoWallet {
  accounts(): Promisable<Address[]>
  addChain(chain: Address, name?: string): Promisable<object>
  chain(): Promisable<Address>
  chains(): Promisable<object>
  permissions(): Promisable<Record<string, object>>
  requestPermissions(permissions: object): Promisable<object>
  revokePermissions(permissions: object): Promisable<object>
  switchChain(chain: Address): Promisable<void>
}
