import { assertEx, type Hash } from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  HydratedBlock, HydratedTransaction, type SignedHydratedBlock, type SignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import {
  FinalizationViewer,
  FinalizationViewerMoniker,
  hydratedBlockToPayloadBundle, hydratedTransactionToPayloadBundle, MempoolRunner, MempoolRunnerMoniker, WindowedBlockViewerMoniker,
} from '../../model/index.ts'

export interface SimpleMempoolRunnerParams extends CreatableProviderParams {
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
}

@creatableProvider()
export class SimpleMempoolRunner extends AbstractCreatableProvider<SimpleMempoolRunnerParams> implements MempoolRunner {
  static readonly defaultMoniker = MempoolRunnerMoniker
  static readonly dependencies = [WindowedBlockViewerMoniker, FinalizationViewerMoniker]
  static readonly monikers = [MempoolRunnerMoniker]
  moniker = SimpleMempoolRunner.defaultMoniker

  protected _finalizationViewer!: FinalizationViewer

  protected get pendingBlocksArchivist() {
    return this.params.pendingBlocksArchivist
  }

  protected get pendingTransactionsArchivist() {
    return this.params.pendingTransactionsArchivist
  }

  static override async paramsHandler(params?: Partial<SimpleMempoolRunnerParams>): Promise<SimpleMempoolRunnerParams> {
    return {
      ...await super.paramsHandler(params),
      pendingBlocksArchivist: assertEx(params?.pendingBlocksArchivist, () => 'pendingBlocksArchivist is required'),
      pendingTransactionsArchivist: assertEx(params?.pendingTransactionsArchivist, () => 'pendingTransactionsArchivist is required'),
    }
  }

  override async createHandler() {
    await super.createHandler()
    this._finalizationViewer = await this.locator.getInstance<FinalizationViewer>(FinalizationViewerMoniker)
  }

  prunePendingBlocks(): Promise<HydratedBlock[]> {
    throw new Error('Method not implemented.')
  }

  prunePendingTransactions(): Promise<HydratedTransaction[]> {
    throw new Error('Method not implemented.')
  }

  async submitBlocks(blocks: SignedHydratedBlock[]): Promise<Hash[]> {
    const bundles = await Promise.all(blocks.map(async ([bw, payloads]) => {
      return hydratedBlockToPayloadBundle([
        await PayloadBuilder.addHashMeta(bw),
        await PayloadBuilder.addHashMeta(payloads),
      ])
    }))
    const inserted = await this.pendingBlocksArchivist.insert(bundles)
    return inserted.map(p => p._hash)
  }

  async submitTransactions(transactions: SignedHydratedTransaction[]): Promise<Hash[]> {
    const bundles = await Promise.all(transactions.map(async ([tx, payloads]) => {
      return hydratedTransactionToPayloadBundle([
        await PayloadBuilder.addHashMeta(tx),
        await PayloadBuilder.addHashMeta(payloads),
      ])
    }))
    const inserted = await this.pendingTransactionsArchivist.insert(bundles)
    return inserted.map(p => p._hash)
  }
}
