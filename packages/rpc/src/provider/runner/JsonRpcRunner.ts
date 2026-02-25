import type { CreatableProviderParams } from '@xyo-network/xl1-protocol-sdk'
import { AbstractCreatableProvider, HttpRpcRemoteConfigZod } from '@xyo-network/xl1-protocol-sdk'

import { HttpRpcTransport, type RpcTransport } from '../../transport/index.ts'
import type { RpcSchemaMap } from '../../types/index.ts'

export interface JsonRpcRunnerParams<TSchemas extends RpcSchemaMap = RpcSchemaMap> extends CreatableProviderParams {
  transport?: RpcTransport<TSchemas>
}

export abstract class AbstractJsonRpcRunner<TSchemas extends RpcSchemaMap,
  TParams extends JsonRpcRunnerParams<TSchemas> = JsonRpcRunnerParams<TSchemas>> extends AbstractCreatableProvider<TParams> {
  protected get transport() {
    return this.params.transport!
  }

  override async createHandler() {
    this.params.transport ??= this.createTransport()
    await super.createHandler()
  }

  private createTransport(): RpcTransport<TSchemas> {
    const httpRemoteConfig = HttpRpcRemoteConfigZod.safeParse(this.config.remote)
    if (httpRemoteConfig.success) {
      const { url } = httpRemoteConfig.data.rpc
      return new HttpRpcTransport(url, this.schemas())
    }

    throw new Error('Unable to create transport')
  }

  protected abstract schemas(): TSchemas
}
