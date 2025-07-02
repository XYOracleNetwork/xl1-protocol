import type { Address, Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface ChainConnection {
  // Chain Identifier - can be a hex (eth contract address) or a string
  chainId?: string | Hex
  // Name of the chain
  name: string
  /** Url for accessing the network */
  url: string
}

export interface Permission {
  // Permission identifier (i.e. RPC method, action, etc.)
  capability: string
  // NOTE: Against which chain this permission is granted
  chain: Address
  // Expiration to prevent ever-green-lighted permissions
  expiration?: number
  // Grantee for the request, if applicable (URI, domain, webpage, address, etc.)
  grantee?: string
  // UUID for the permission
  id: string
  // Time at which the permission was granted
  issuedAt?: number
  // status of the permission (granted, revoked, etc.)
  status?: 'granted' | 'revoked'
  // Specific value for the permission (i.e. allowed accounts, methods, etc.)
  value?: string[]
}

export interface XyoHost {
  addChain(chainConnectionInfo: ChainConnection): Promisable<boolean>
  chains(): Promisable<ChainConnection[]>
  getPermissions(): Promisable<Permission[]>
  requestPermissions(permissions: Permission[]): Promisable<boolean>
  revokePermissions(permissions: Permission[]): Promisable<boolean>
}
