import type { Address, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

/** @deprecated  - use XyoHost instead */
export interface XyoWallet {
  accounts(): Promisable<Address[]>
  addChain(chain: Hex, name?: string): Promisable<object>
  chain(): Promisable<Hex>
  chains(): Promisable<object>
  permissions(): Promisable<Record<string, object>>
  requestPermissions(permissions: object): Promisable<object>
  revokePermissions(permissions: object): Promisable<object>
  switchChain(chain: Hex): Promisable<void>
}
