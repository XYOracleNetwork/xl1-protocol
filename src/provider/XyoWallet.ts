import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Chain } from '../model.ts'

/** @deprecated  - use XyoHost instead */
export interface XyoWallet {
  accounts(): Promisable<Address[]>
  addChain(chain: Chain, name?: string): Promisable<object>
  chain(): Promisable<Chain>
  chains(): Promisable<object>
  permissions(): Promisable<Record<string, object>>
  requestPermissions(permissions: object): Promisable<object>
  revokePermissions(permissions: object): Promisable<object>
  switchChain(chain: Chain): Promisable<void>
}
