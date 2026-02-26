import type {
  XyoConnection,
  XyoGateway,
} from '@xyo-network/xl1-protocol'
import { XyoConnectionMoniker, XyoGatewayMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider } from '../../CreatableProvider/index.ts'

export interface SimpleXyoGatewayParams extends CreatableProviderParams {}

export class SimpleXyoGateway extends AbstractCreatableProvider<SimpleXyoGatewayParams> implements XyoGateway {
  static readonly defaultMoniker = XyoGatewayMoniker
  static readonly dependencies = [XyoConnectionMoniker]
  static readonly monikers = [XyoGatewayMoniker]
  moniker = SimpleXyoGateway.defaultMoniker

  private _connection!: XyoConnection

  get connection(): XyoConnection {
    return this._connection
  }

  override async createHandler() {
    await super.createHandler()
    this._connection = await this.locator.getInstance<XyoConnection>(XyoConnectionMoniker)
  }
}
