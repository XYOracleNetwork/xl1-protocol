import { type Hash } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { SignedHydratedTransactionWithStorageMeta } from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import {
  MempoolRunner,
  MempoolRunnerMoniker, type XyoRunner, XyoRunnerMoniker,
} from '../../model/index.ts'

export interface SimpleXyoRunnerParams extends CreatableProviderParams {
}

@creatableProvider()
export class SimpleXyoRunner extends AbstractCreatableProvider<SimpleXyoRunnerParams> implements XyoRunner {
  static readonly defaultMoniker = XyoRunnerMoniker
  static readonly dependencies = [MempoolRunnerMoniker]
  static readonly monikers = [XyoRunnerMoniker]
  moniker = SimpleXyoRunner.defaultMoniker

  private _mempoolRunner?: MempoolRunner

  get mempool() {
    return this._mempoolRunner!
  }

  async broadcastTransaction(transaction: SignedHydratedTransactionWithStorageMeta): Promise<Hash> {
    await this.mempool.submitTransactions([transaction])
    const hash = await PayloadBuilder.hash(transaction[0])
    this.logger?.info(`Broadcasted transaction with hash ${hash}`)
    return hash
  }

  override async createHandler() {
    await super.createHandler()
    this._mempoolRunner = await this.locator.getInstance<MempoolRunner>(MempoolRunnerMoniker)
  }
}
