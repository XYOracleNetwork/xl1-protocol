import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { ChainId } from '../model/index.ts'

/** @deprecated  - use XyoClient instead */
export interface XyoWallet {
  accounts(): Promisable<Address[]>
  addChain(chain: ChainId, name?: string): Promisable<object>
  chain(): Promisable<ChainId>
  chains(): Promisable<object>
  permissions(): Promisable<Record<string, object>>
  requestPermissions(permissions: object): Promisable<object>
  revokePermissions(permissions: object): Promisable<object>
  switchChain(chain: ChainId): Promisable<void>
}
