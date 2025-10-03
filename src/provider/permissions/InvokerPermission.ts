import type { JsonValue } from '@xylabs/object'

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 *
 * NOTE: In order to send multiple permission requests at once, do not send multiple parentCapability keys.
 * Instead, send multiple PermissionRequest objects in the params array of the rpc call.
 */
export interface PermissionRequest {
  [parentCapability: string]: {
    [caveatName: string]: JsonValue
  }
}

/**
 * Modeled after EIP-2255
 * See - https://eips.ethereum.org/EIPS/eip-2255#specification
 */
export interface RequestedPermission {
  /** Optional timestamp for when the permission was granted */
  date?: number
  /** Permission identifier (i.e. RPC method, action, etc.) */
  parentCapability: string
}

export type CaveatTypes = 'chain' | 'expiration' | 'filteredResponse' | 'rateLimit' | 'restrictReturnedAccounts'

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
  /** Caveats for the permission, if applicable (i.e. allowed accounts, signing, etc.) */
  caveats?: Caveats[]
  /** Invoker for the given permission (URI, domain, webpage, address, etc.) */
  invoker: string
  /** Permission identifier (i.e. RPC method, action, etc.) */
  parentCapability: string
}

export interface InvokerPermission extends Permission {
  /** Time at which the permission was granted */
  date?: number
}
