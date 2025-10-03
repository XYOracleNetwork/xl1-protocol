import type { Promisable } from '@xylabs/promise'

import type {
  InvokerPermission, PermissionRequest, RequestedPermission,
} from './InvokerPermission.ts'

export interface XyoPermissions {
  /**
   * Returns the permissions that are currently granted
   *
   * Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
   * (empty by default). It takes no parameters and returns an array of Permission objects."
   *
   * See - https://eips.ethereum.org/EIPS/eip-2255#specification
   */
  getPermissions(): Promisable<InvokerPermission[]>
  // Given a permissions request, attempts to request the permissions from the user
  requestPermissions(permissions: PermissionRequest[]): Promisable<RequestedPermission[]>
  // Given a permissions request, attempts to revoke the permissions from the user
  revokePermissions(permissions: PermissionRequest): Promisable<RequestedPermission[]>
}

// @deprecated - use XyoPermissions instead
export interface PermissionsProvider extends XyoPermissions {}
