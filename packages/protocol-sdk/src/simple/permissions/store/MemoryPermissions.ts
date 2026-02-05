import { assertEx } from '@xylabs/sdk-js'
import type { InvokerPermission } from '@xyo-network/xl1-protocol'

import type { Invoker, PermissionsStore } from './PermissionsStore.ts'

/**
 * In-memory implementation of XyoPermissions for testing or ephemeral use cases.
 * Does not persist data beyond the lifetime of the instance.
 * Assumes all permission requests are granted and revocations always succeed.
 */
export class MemoryPermissionsStore implements PermissionsStore {
  private _invoker: Invoker
  private permissions: InvokerPermission[] = []

  constructor(invoker: Invoker) {
    this._invoker = invoker
  }

  get invoker(): Invoker {
    return assertEx(this._invoker, () => 'Invoker must be defined to get permissions')
  }

  async getPermissions(): Promise<InvokerPermission[]> {
    await Promise.resolve()
    return this.permissions
  }

  async setPermissions(permissions: InvokerPermission[]): Promise<void> {
    await Promise.resolve()
    this.permissions = permissions
  }
}
