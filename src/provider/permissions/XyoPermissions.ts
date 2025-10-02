import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, RequestedPermission } from './InvokerPermission.ts'

export interface XyoPermissions {
  getPermissions(permissions: RequestedPermission[]): Promisable<InvokerPermission[]>
  requestPermissions(permissions: RequestedPermission[]): Promisable<boolean>
  revokePermissions(permissions: RequestedPermission[]): Promisable<boolean>
}

// @deprecated - use XyoPermissions instead
export interface PermissionsProvider extends XyoPermissions {}
