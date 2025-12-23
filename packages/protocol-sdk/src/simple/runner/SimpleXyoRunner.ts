import {
  assertEx,
  type Hash,
} from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { SignedHydratedTransactionWithStorageMeta } from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import { hydratedTransactionToPayloadBundle } from '../../model/index.ts'
import { type XyoRunner, XyoRunnerMoniker } from '../../provider/index.ts'
import { type MempoolRunner, MempoolRunnerMoniker } from '../../runners/index.ts'

export interface SimpleXyoRunnerParams extends CreatableProviderParams {
  pendingTransactionsArchivist: ArchivistInstance
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

  static override async paramsHandler(params?: SimpleXyoRunnerParams) {
    return {
      ...await super.paramsHandler(params),
      pendingTransactionsArchivist: assertEx(
        params?.pendingTransactionsArchivist,
        () => 'A pendingTransactionsArchivist is required to create a SimpleXyoRunner',
      ),
    }
  }

  async broadcastTransaction(transaction: SignedHydratedTransactionWithStorageMeta): Promise<Hash> {
    const archivist = this.params.pendingTransactionsArchivist
    const bundle = hydratedTransactionToPayloadBundle(transaction)
    await archivist.insert([bundle])
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
