import type { Promisable } from '@xylabs/promise'

import type { InvokerPermission, Permission } from './permissions/index.ts'
// eslint-disable-next-line sonarjs/deprecation
import type { TransactionSubmitter } from './TransactionSubmitter.ts'
import type { XyoConnection } from './XyoConnection.ts'
import type { XyoGatewayHelpers } from './XyoGatewayHelpers.ts'
import type { XyoSigner } from './XyoSigner.ts'

/** @deprecated use XyoConnectionConfig instead */
export interface XyoConnectionConfigDeprecated {
  name: string
}

/** @deprecated use XyoGatewayProvider instead */
// eslint-disable-next-line sonarjs/deprecation
export interface XyoGatewayProviderDeprecated extends TransactionSubmitter {
  /**
   * @deprecated use `connection()` instead
   */
  activeConnection(): Promisable<XyoConnection | undefined>
  /**
   * @deprecated use `connection()` instead
   */
  // eslint-disable-next-line sonarjs/deprecation
  addConnection(config: XyoConnectionConfigDeprecated): Promisable<XyoConnection>
  /**
   * @deprecated use `connection()` instead
   */
  connections(): Promisable<Record<string, XyoConnection>>
  /**
   * @deprecated Permissions now at Client level
   */
  getPermissions(): Promisable<InvokerPermission[]>
  /**
   * @deprecated Permissions now at Client level
   */
  requestPermissions(permissions: Permission[]): Promisable<boolean>
  /**
   * @deprecated Permissions now at Client level
   */
  revokePermissions(permissions: Permission[]): Promisable<boolean>
}

// eslint-disable-next-line sonarjs/deprecation
export interface XyoGatewayProvider extends Partial<XyoGatewayHelpers>, Partial<XyoGatewayProviderDeprecated> {
  /**
   * Returns the connection provider for this gateway.
   */
  connection(): Promisable<XyoConnection>
  /**
   * Returns the signer for this gateway.
   */
  signer(): Promisable<XyoSigner>
}
