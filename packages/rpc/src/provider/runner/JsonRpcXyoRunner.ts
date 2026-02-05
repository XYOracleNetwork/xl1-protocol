import { type Hash } from '@xylabs/sdk-js'
import type {
  MempoolRunner, SignedHydratedTransaction, XyoRunner,
} from '@xyo-network/xl1-protocol'
import { MempoolRunnerMoniker, XyoRunnerMoniker } from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { XyoRunnerRpcSchemas } from '../../types/index.ts'
import { AbstractJsonRpcRunner } from './JsonRpcRunner.ts'

@creatableProvider()
export class JsonRpcXyoRunner extends AbstractJsonRpcRunner<XyoRunnerRpcSchemas> implements XyoRunner {
  static readonly defaultMoniker = XyoRunnerMoniker
  static readonly dependencies = [MempoolRunnerMoniker]
  static readonly monikers = [XyoRunnerMoniker]
  moniker = JsonRpcXyoRunner.defaultMoniker

  private _mempoolRunner?: MempoolRunner

  get mempool() {
    return this._mempoolRunner!
  }

  async broadcastTransaction(transaction: SignedHydratedTransaction): Promise<Hash> {
    return await this.transport.sendRequest('xyoRunner_broadcastTransaction', [transaction])
  }

  override async createHandler() {
    await super.createHandler()
    this._mempoolRunner = await this.locateAndCreate<MempoolRunner>(MempoolRunnerMoniker)
  }

  protected schemas() {
    return XyoRunnerRpcSchemas
  }
}
