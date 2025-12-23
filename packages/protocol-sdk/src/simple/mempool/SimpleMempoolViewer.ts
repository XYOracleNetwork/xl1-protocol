import {
  exists, isDefined, isHash,
} from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import {
  isHashMeta, isPayloadBundle, type Sequence,
} from '@xyo-network/payload-model'
import type {
  HydratedTransactionWithHashMeta, SignedHydratedBlockWithHashMeta, SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { bundledPayloadToHydratedBlock, bundledPayloadToHydratedTransaction } from '../../model/index.ts'
import {
  type MempoolViewer,
  MempoolViewerMoniker,
  type PendingTransactionsOptions,
  WindowedBlockViewer,
  WindowedBlockViewerMoniker,
} from '../../viewers/index.ts'

export interface SimpleMempoolViewerParams extends CreatableProviderParams {
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
}

@creatableProvider()
export class SimpleMempoolViewer extends AbstractCreatableProvider<SimpleMempoolViewerParams> implements MempoolViewer {
  static readonly defaultMoniker = MempoolViewerMoniker
  static readonly dependencies = [WindowedBlockViewerMoniker]
  static readonly monikers = [MempoolViewerMoniker]
  moniker = SimpleMempoolViewer.defaultMoniker

  private _windowedBlockViewer?: WindowedBlockViewer

  protected get pendingBlocksArchivist() {
    return this.params.pendingBlocksArchivist
  }

  protected get pendingTransactionsArchivist() {
    return this.params.pendingTransactionsArchivist
  }

  protected get windowedBlockViewer() {
    return this._windowedBlockViewer!
  }

  override async createHandler() {
    await super.createHandler()
    this._windowedBlockViewer = await this.locator.getInstance<WindowedBlockViewer>(WindowedBlockViewerMoniker)
  }

  async pendingBlocks({ cursor: providedCursor }: PendingTransactionsOptions = {}): Promise<SignedHydratedBlockWithHashMeta[]> {
    let cursor: Sequence | undefined = undefined
    if (isHash(providedCursor)) {
      const [p] = await this.pendingBlocksArchivist.get([providedCursor])
      if (isDefined(p)) {
        cursor = p._sequence
      }
    }
    const bundles = await this.pendingBlocksArchivist.next({
      order: 'desc', limit: 100, cursor,
    })
    const filteredBundles = bundles.filter(isPayloadBundle).filter(isHashMeta)
    return (await Promise.all(filteredBundles.map(async bundle => await bundledPayloadToHydratedBlock(bundle)))).filter(exists)
  }

  async pendingTransactions({ cursor: providedCursor, limit = 100 }: PendingTransactionsOptions = {}): Promise<SignedHydratedTransactionWithHashMeta[]> {
    let cursor: Sequence | undefined = undefined
    if (isHash(providedCursor)) {
      const [p] = await this.pendingTransactionsArchivist.get([providedCursor])
      if (isDefined(p)) {
        cursor = p._sequence
      }
    }
    this.logger?.info(`Fetching pending transactions from cursor: ${cursor}`)
    const bundles = await this.pendingTransactionsArchivist.next({
      order: 'asc', limit, cursor,
    })
    this.logger?.info(`Fetched pending transactions: ${bundles.length} bundles`)
    const filteredBundles = bundles.filter(isPayloadBundle).filter(isHashMeta)
    this.logger?.info(`Filtered pending transactions: ${JSON.stringify(bundles, null, 2)} filteredBundles`)
    const result = (await Promise.all(filteredBundles.map(async bundle => await bundledPayloadToHydratedTransaction(bundle)))).filter(exists)
    this.logger?.info(`Converted pending transactions: ${JSON.stringify(result, null, 2)} results`)
    return (await Promise.all(result.map(async (tx) => {
      const purged = await this.purgeIfInvalid(tx)
      if (purged) {
        this.logger?.info(`Purged completed/invalid transaction: ${tx[0]._hash}`)
      } else {
        return tx
      }
    }))).filter(exists)
  }

  private async purgeIfInvalid(tx: HydratedTransactionWithHashMeta) {
    const existingBlock = await this.windowedBlockViewer.blockByTransactionHash(tx[0]._hash)
    if (existingBlock) {
      await this.pendingTransactionsArchivist.delete([tx[0]._hash])
      return true
    }
    return false
  }
}
