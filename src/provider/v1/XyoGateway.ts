import type { Hex } from '@xylabs/hex'
import type { JsonValue } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'
import type { Signed } from '@xyo-network/boundwitness-model'

import type { HydratedTransaction, TransactionBoundWitness } from '../../transaction/index.ts'

export interface ChainConnection {
  /** Chain Identifier - can be a hex (eth contract address) or a string */
  chain?: Hex
  /** Name of the chain */
  name: string
  /** Url for accessing the network */
  url: string
}

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 */
export interface PermissionRequest {
  [capability: string]: {
    [caveatName: string]: JsonValue
  }
}

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 */
export interface RequestedPermission {
  /** Permission identifier (i.e. RPC method, action, etc.) */
  capability: string
  /** Optional timestamp for when the permission was granted */
  date?: number
}

export type CaveatTypes = 'chain' | 'expiration' | 'filteredResponse' | 'rateLimit'

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 */
export interface Caveats {
  /** Type of caveat */
  type: CaveatTypes
  /** Value for the caveat (i.e. chain id, subset of accounts, expiration, max request per minute, etc.) */
  value: JsonValue
}

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 */
export interface Permission {
  /** Permission identifier (i.e. RPC method, action, etc.) */
  capability: string
  /** Caveats for the permission, if applicable (i.e. allowed accounts, signing, etc.) */
  caveats?: Caveats[]
  /** Invoker for the given permission (URI, domain, webpage, address, etc.) */
  invoker: string
}

export interface InvokerPermission extends Permission {
  /** Time at which the permission was granted */
  date?: number
}

export interface XyoGateway {
  activeChain: Hex
  addChain(chainConnectionInfo: ChainConnection): Promisable<boolean>
  chains(): Promisable<ChainConnection[]>
  getPermissions(): Promisable<InvokerPermission[]>
  requestPermissions(permissions: Permission[]): Promisable<boolean>
  revokePermissions(permissions: Permission[]): Promisable<boolean>
  submitTransaction(tx: HydratedTransaction): Promise<Signed<TransactionBoundWitness>>
}
