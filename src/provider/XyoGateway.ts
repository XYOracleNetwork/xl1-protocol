import type { Promisable } from '@xylabs/promise'

import type { XyoConnection } from './XyoConnection.ts'
import type { XyoGatewayHelpers } from './XyoGatewayHelpers.ts'
import type { XyoSigner } from './XyoSigner.ts'

/** @deprecated use XyoConnectionConfig instead */
export interface XyoConnectionConfigDeprecated {
  name: string
}

export interface XyoGatewayProvider extends Partial<XyoGatewayHelpers> {
  /**
   * Returns the connection provider for this gateway.
   */
  connection(): Promisable<XyoConnection>
  /**
   * Returns the signer for this gateway.
   */
  signer(): Promisable<XyoSigner>
}
