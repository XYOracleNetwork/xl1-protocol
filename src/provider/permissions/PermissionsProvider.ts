import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, Permission } from './InvokerPermission.ts'

export interface PermissionsProvider {
  permissions(): Promisable<InvokerPermission[]>
  request(permissions: Permission[]): Promisable<void>
  revoke(permissions: Permission[]): Promisable<void>
}
