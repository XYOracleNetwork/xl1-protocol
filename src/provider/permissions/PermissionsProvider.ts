import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, Permission } from './InvokerPermission.ts'

export interface PermissionsProvider {
  getPermissions(): Promisable<InvokerPermission[]>
  requestPermissions(permissions: Permission[]): Promisable<boolean>
  revokePermissions(permissions: Permission[]): Promisable<boolean>
}
