import {
  assertEx, exists, type Hash,
} from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import { isPayloadBundle, Sequence } from '@xyo-network/payload-model'
import {
  isHydratedBlockWithHashMeta, type SignedHydratedBlock, type SignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import {
  BlockValidationViewer,
  BlockValidationViewerMoniker,
  bundledPayloadToHydratedBlock,
  FinalizationViewer,
  FinalizationViewerMoniker,
  hydratedBlockToPayloadBundle, hydratedTransactionToPayloadBundle, MempoolPruneOptions, MempoolRunner, MempoolRunnerMoniker, WindowedBlockViewerMoniker,
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

  protected _blockValidationViewer!: BlockValidationViewer
  protected _finalizationViewer!: FinalizationViewer

  protected get blockValidationViewer() {
    return this._blockValidationViewer!
  }

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
    this._blockValidationViewer = await this.locator.getInstance<BlockValidationViewer>(BlockValidationViewerMoniker)
    this._finalizationViewer = await this.locator.getInstance<FinalizationViewer>(FinalizationViewerMoniker)
  }

  async prunePendingBlocks({
    batchSize = 10, maxPrune = 1000, maxCheck = 1000,
  }: MempoolPruneOptions = {}): Promise<[number, number]> {
    let total = 0
    let pruned = 0
    let cursor: Sequence | undefined
    let batch = await this.pendingBlocksArchivist.next({
      limit: batchSize, cursor, order: 'desc',
    })
    while (batch.length > 0 && pruned < maxPrune && total < maxCheck) {
      const bundles = batch.map((p) => {
        return isPayloadBundle(p) ? p : null
      })
      const blocks = await Promise.all(bundles.map(async (bundle) => {
        return bundle ? await bundledPayloadToHydratedBlock(bundle) : null
      }))
      let valid = blocks.map(b => !!b)
      let remainingBlockMap: number[] = []
      let remainingBlocks = blocks.map((b, i) => {
        if (isHydratedBlockWithHashMeta(b)) {
          return b
        }
        remainingBlockMap.push(i)
      }).filter(exists)
      assertEx(remainingBlockMap.length === remainingBlocks.length, () => 'remainingBlockMap length should match remainingBlocks length')
      const validationResults = await this.blockValidationViewer.validateBlocks(remainingBlocks)
      for (const [i, r] of validationResults.entries()) {
        const validated = isHydratedBlockWithHashMeta(r)
        valid[remainingBlockMap[i]] = validated
      }
      const pruneHashes = bundles.map((p, i) => {
        if (p && !valid[i]) {
          return p._hash
        }
      }).filter(exists)
      pruned += pruneHashes.length
      total += batch.length
      await this.pendingBlocksArchivist.delete(pruneHashes)

      cursor = batch[0]._sequence

      batch = await this.pendingBlocksArchivist.next({
        limit: batchSize, cursor, order: 'desc',
      })
    }
    return [pruned, total]
  }

  prunePendingTransactions(): Promise<[number, number]> {
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
