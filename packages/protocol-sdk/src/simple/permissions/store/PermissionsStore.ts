import type { InvokerPermission, PermissionsGetHandler } from '@xyo-network/xl1-protocol'

export type Invoker = string
export type ParentCapability = string
/**
 * Interface for a permissions store that abstracts away the storage medium.
 * (i.e. in-memory, browser storage, database, etc.)
 */
export interface PermissionsStore extends PermissionsGetHandler {
  // The invoker associated with this permissions store
  readonly invoker: Invoker
  // Retrieve all permissions associated with the invoker.
  // Store or update permissions for the invoker
  setPermissions(permissions: InvokerPermission[]): Promise<void>
}
