import type { Promisable } from '@xylabs/sdk-js'

import type {
  XyoConnection, XyoGateway, XyoSigner,
} from '../../provider/index.ts'

export class SimpleXyoGateway implements XyoGateway {
  private readonly _connection: XyoConnection
  private readonly _signer: XyoSigner

  constructor(signer: XyoSigner, connection: XyoConnection) {
    this._signer = signer
    this._connection = connection
  }

  get connectionInstance(): XyoConnection {
    return this._connection
  }

  get signerInstance(): XyoSigner {
    return this._signer
  }

  connection(): Promisable<XyoConnection> {
    return this._connection
  }

  signer(): Promisable<XyoSigner> {
    return this._signer
  }
}
