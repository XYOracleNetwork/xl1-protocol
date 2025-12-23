import type { Promisable } from '@xylabs/sdk-js'

import type { XyoSigner } from './signer/index.ts'
import type { XyoConnection } from './XyoConnection.ts'

export interface XyoGateway {
  /**
   * Returns the connection provider for this gateway.
   */
  connectionInstance: XyoConnection
  /**
   * Returns the signer for this gateway.
   */
  signerInstance: XyoSigner

  /** @deprecated use connectionInstance */
  connection(): Promisable<XyoConnection>

  /** @deprecated use signerInstance */
  signer(): Promisable<XyoSigner>
}
