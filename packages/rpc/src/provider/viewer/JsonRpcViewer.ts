import { isDefined } from '@xylabs/sdk-js'
import type { CreatableProviderParams } from '@xyo-network/xl1-protocol-sdk'
import { AbstractCreatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { HttpRpcTransport, type RpcTransport } from '../../transport/index.ts'
import type { RpcSchemaMap } from '../../types/index.ts'

export interface JsonRpcViewerParams<TSchemas extends RpcSchemaMap = RpcSchemaMap> extends CreatableProviderParams {
  transport?: RpcTransport<TSchemas>
}

export abstract class AbstractJsonRpcViewer<TSchemas extends RpcSchemaMap,
  TParams extends JsonRpcViewerParams<TSchemas> = JsonRpcViewerParams<TSchemas>> extends AbstractCreatableProvider<TParams> {
  protected _transport?: RpcTransport<TSchemas>

  protected get transport() {
    return this.params.transport!
  }

  override async createHandler() {
    this.params.transport ??= this.createTransport()
    await super.createHandler()
  }

  private createTransport(): RpcTransport<TSchemas> {
    const endpoint = this.config.remote.rpc?.url
    if (isDefined(endpoint)) {
      return new HttpRpcTransport(endpoint, this.schemas())
    }
    throw new Error('Unable to create transport')
  }

  protected abstract schemas(): TSchemas
}
