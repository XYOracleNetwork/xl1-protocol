import { assertEx } from '@xylabs/sdk-js'
import type {
  CaveatTypes,
  InvokerPermission, PermissionRequest, RequestedPermission, XyoPermissions,
} from '@xyo-network/xl1-protocol'

import type { Invoker, PermissionsStore } from './store/index.ts'

/**
 * In-memory implementation of XyoPermissions for testing or ephemeral use cases.
 * Does not persist data beyond the lifetime of the instance.
 * Assumes all permission requests are granted and revocations always succeed.
 */
export class SimpleXyoPermissions implements XyoPermissions {
  invoker: Invoker
  private _store: PermissionsStore

  constructor(store: PermissionsStore) {
    this._store = store
    this.invoker = store.invoker
  }

  get store(): PermissionsStore {
    return assertEx(this._store, () => 'Store must be defined to get permissions')
  }

  async getPermissions(): Promise<InvokerPermission[]> {
    return await this.store.getPermissions()
  }

  // assumed the permissions are always granted
  async requestPermissions(permissions: PermissionRequest[]): Promise<RequestedPermission[]> {
    await Promise.resolve()
    // Flatten PermissionRequest[] into InvokerPermission[]
    const newPermissions: InvokerPermission[] = []
    const now = Date.now()
    for (const req of permissions) {
      for (const parentCapability in req) {
        newPermissions.push({
          invoker: this.invoker,
          parentCapability,
          caveats: Object.entries(req[parentCapability]).map(([type, value]) => ({ type: type as CaveatTypes, value })),
          date: now,
        })
      }
    }

    // Update or add permissions in the store
    const existingPermissions = await this.getPermissions()
    for (const perm of newPermissions) {
      const idx = existingPermissions.findIndex(
        p => p.invoker === perm.invoker && p.parentCapability === perm.parentCapability,
      )
      if (idx === -1) {
        existingPermissions.push(perm)
      } else {
        existingPermissions[idx] = perm
      }
    }
    await this.store.setPermissions(existingPermissions)

    // Return the granted permissions in RequestedPermission shape
    return newPermissions.map(({ parentCapability, date }) => ({ parentCapability, date }))
  }

  // Assumes the permissions are always revoked
  async revokePermissions(permissions: PermissionRequest): Promise<RequestedPermission[]> {
    const existingPermissions = await this.getPermissions()
    const revoked: RequestedPermission[] = []
    for (const parentCapability in permissions) {
      const idx = existingPermissions.findIndex(
        p => p.invoker === this.invoker && p.parentCapability === parentCapability,
      )
      if (idx !== -1) {
        const removed = existingPermissions.splice(idx, 1)[0]
        revoked.push({ parentCapability: removed.parentCapability, date: removed.date })
      }
    }
    await this.store.setPermissions(existingPermissions)
    return revoked
  }
}
