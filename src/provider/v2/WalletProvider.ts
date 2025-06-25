import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

// TODO: define the permissions object and return object types

export interface WalletProvider {
  accounts(): Promisable<Address[]>
  permissions(): Promisable<Partial<Record<string, object>>>
  requestPermissions(permissions: object): Promisable<object>
  revokePermissions(permissions: object): Promisable<object>
}
