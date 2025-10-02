import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, RequestedPermission } from './InvokerPermission.ts'

export interface PermissionsProvider {
  getPermissions(permissions: RequestedPermission[]): Promisable<InvokerPermission[]>
  requestPermissions(permissions: RequestedPermission[]): Promisable<boolean>
  revokePermissions(permissions: RequestedPermission[]): Promisable<boolean>
}
