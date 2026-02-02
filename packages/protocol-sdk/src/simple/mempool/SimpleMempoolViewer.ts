import {
  exists, isDefined, isHash,
} from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import {
  HashMeta, isHashMeta, isPayloadBundle, PayloadBundle, type Sequence,
} from '@xyo-network/payload-model'
import {
  type HydratedTransactionWithHashMeta, type MempoolViewer, MempoolViewerMoniker,
  PendingTransactionsOptions,
  type SignedHydratedBlockWithHashMeta, type SignedHydratedTransactionWithHashMeta,
  WindowedBlockViewer,
  WindowedBlockViewerMoniker,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { bundledPayloadToHydratedBlock, bundledPayloadToHydratedTransaction } from '../../model/index.ts'

type PayloadBundleWithHashMeta = PayloadBundle & HashMeta

type HydratedTxWithBundle = {
  bundle: PayloadBundleWithHashMeta
  tx: SignedHydratedTransactionWithHashMeta
}

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

    const filteredBundles: PayloadBundleWithHashMeta[] = bundles.filter(isPayloadBundle).filter(isHashMeta)
    // this.logger?.info(`Filtered pending transactions: ${JSON.stringify(filteredBundles, null, 2)} filteredBundles`)

    const hydratedWithBundle: HydratedTxWithBundle[] = (await Promise.all(
      filteredBundles.map(async (bundle) => {
        const tx = await bundledPayloadToHydratedTransaction(bundle)
        return isDefined(tx) ? { bundle, tx } : undefined
      }),
    )).filter(exists)
    // this.logger?.info(`Converted pending transactions: ${JSON.stringify(hydratedWithBundle.map(x => x.tx), null, 2)} results`)

    const currentBlock = await this.windowedBlockViewer.currentBlock()
    const evaluated = await Promise.all(
      hydratedWithBundle.map(async ({ bundle, tx }) => ({
        bundle, tx, deletable: await this.isDeletable(tx, currentBlock),
      })),
    )

    const validTransactions = evaluated.filter(x => !x.deletable)
    const deletionCandidates = evaluated.filter(x => x.deletable)
    this.logger?.info(`Pending transactions: ${validTransactions.length} valid, ${deletionCandidates.length} not deletable`)

    // Delete the invalid transactions that should not remain in the mempool.
    await Promise.all(
      deletionCandidates.map(async ({ bundle, tx }) => {
        await this.deleteBundledTransaction(bundle)
        this.logger?.info(`Purged completed/invalid bundled transaction: ${bundle._hash}/${tx[0]._hash}`)
      }),
    )

    const inclusionCandidates = (await Promise.all(validTransactions.map(x => x.tx).map(async (tx) => {
      // Check if it's a candidate for inclusion (skip deletable check as we've already done that)
      if (await this.isInclusionCandidate(tx, currentBlock, false)) return tx
    }))).filter(exists)

    this.logger?.info(`Inclusion candidates: ${inclusionCandidates.length}`)
    return inclusionCandidates
  }

  private async deleteBundledTransaction(bundle: PayloadBundleWithHashMeta): Promise<void> {
    await this.pendingTransactionsArchivist.delete([bundle._hash])
  }

  /**
   * Evaluates a transaction to determine if it should be purged from the mempool.
   * @param tx The transaction to evaluate
   * @param currentBlock The current block to use for evaluation
   * @returns True if the transaction should be purged, false otherwise
   */
  private async isDeletable(tx: HydratedTransactionWithHashMeta, currentBlock: SignedHydratedBlockWithHashMeta): Promise<boolean> {
    const currentBlockNumber = currentBlock[0].block
    const nextBlockNumber = currentBlockNumber + 1
    const { exp } = tx[0]

    // If it's expired
    if (nextBlockNumber > exp) return true

    // If it's already included in a block
    const existingBlock = await this.windowedBlockViewer.blockByTransactionHash(tx[0]._hash)
    if (existingBlock) return true

    return false
  }

  /**
   * Evaluates a transaction to determine if is valid for inclusion in the next block. A transaction is invalid if:
   * - The transaction is too early/expired
   * - The transaction has already been included in a block
   * @param tx The transaction to evaluate
   * @param currentBlock The current block to use for evaluation
   * @param checkForDeletable Whether to check if the transaction is deletable (default: true)
   * @returns True if the transaction is valid for inclusion in the next block, false otherwise
   */
  private async isInclusionCandidate(
    tx: HydratedTransactionWithHashMeta,
    currentBlock: SignedHydratedBlockWithHashMeta,
    checkForDeletable: boolean = true,
  ): Promise<boolean> {
    const currentBlockNumber = currentBlock[0].block
    const nextBlockNumber = currentBlockNumber + 1
    const { nbf } = tx[0]

    // If it's not time yet
    if (nextBlockNumber < nbf) return false

    // If it's deletable
    if (checkForDeletable && await this.isDeletable(tx, currentBlock)) return false

    return true
  }
}
