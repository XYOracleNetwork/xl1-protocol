import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, Permission } from './PermissionsProvider.ts'
import type { TransactionSubmitter } from './TransactionSubmitter.ts'
import type { XyoConnectionProvider, XyoRpcConnectionConfig } from './XyoConnection.ts'
import type { XyoSigner } from './XyoSigner.ts'

export interface XyoGatewayProvider extends TransactionSubmitter {
  /**
   * @deprecated use `connection()` instead
   */
  activeConnection?(): Promisable<XyoConnectionProvider | undefined>
  /**
   * @deprecated use `connection()` instead
   */
  addConnection?(config: XyoRpcConnectionConfig): Promisable<XyoConnectionProvider>
  /**
   * Returns the connection provider for this gateway.
   */
  connection(): Promisable<XyoConnectionProvider>
  /**
   * @deprecated use `connection()` instead
   */
  connections?(): Promisable<Record<string, XyoConnectionProvider>>
  /**
   * @deprecated Permissions now at Client level
   */
  getPermissions?(): Promisable<InvokerPermission[]>
  /**
   * @deprecated Permissions now at Client level
   */
  requestPermissions?(permissions: Permission[]): Promisable<boolean>
  /**
   * @deprecated Permissions now at Client level
   */
  revokePermissions?(permissions: Permission[]): Promisable<boolean>
  /**
   * Returns the signer for this gateway.
   */
  signer(): Promisable<XyoSigner>
}
