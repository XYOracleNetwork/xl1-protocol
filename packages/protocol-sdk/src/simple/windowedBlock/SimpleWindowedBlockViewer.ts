import {
  assertEx, exists, type Hash, isNull, type Promisable,
} from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import type {
  ChainId, HydratedBlockWithHashMeta, SignedHydratedBlockWithHashMeta, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import { Mutex } from 'async-mutex'

import { transactionsFromHydratedBlock } from '../../block/index.ts'
import {
  AbstractCreatableProvider, creatableProvider, type CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { MemoryMap } from '../../driver/index.ts'
import type {
  BlockViewer, SyncMap, WindowedBlockViewer,
} from '../../model/index.ts'
import { BlockViewerMoniker, WindowedBlockViewerMoniker } from '../../model/index.ts'

export interface SimpleWindowedBlockViewerParams extends CreatableProviderParams {
  blockViewer?: BlockViewer
  maxWindowSize: number
  syncInterval: number
}

@creatableProvider()
export class SimpleWindowedBlockViewer extends AbstractCreatableProvider<SimpleWindowedBlockViewerParams> implements WindowedBlockViewer {
  static readonly defaultMoniker = WindowedBlockViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [WindowedBlockViewerMoniker]
  moniker = WindowedBlockViewerMoniker

  private _blockHashMap!: SyncMap<Hash, SignedHydratedBlockWithHashMeta>
  private _blockNumberMap!: SyncMap<XL1BlockNumber, SignedHydratedBlockWithHashMeta>
  // the external BlockViewer
  private _blockViewer!: BlockViewer
  private _chain: SignedHydratedBlockWithHashMeta[] = []
  private _syncMutex = new Mutex()
  private _timerId: ReturnType<typeof setInterval> | null = null
  private _transactionHashMap!: SyncMap<Hash, SignedHydratedBlockWithHashMeta>

  protected get maxWindowSize() {
    return this.params.maxWindowSize
  }

  protected get syncInterval() {
    return this.params.syncInterval
  }

  static override async paramsHandler(params?: Partial<SimpleWindowedBlockViewerParams>): Promise<SimpleWindowedBlockViewerParams> {
    return {
      ...await super.paramsHandler(params),
      maxWindowSize: params?.maxWindowSize ?? 1000,
      syncInterval: params?.syncInterval ?? 10_000,
    }
  }

  blockByHash(hash: Hash) {
    return this._blockHashMap.get(hash) ?? null
  }

  blockByNumber(blockNumber: XL1BlockNumber) {
    return this._blockNumberMap.get(blockNumber) ?? null
  }

  async blockByTransactionHash(hash: Hash) {
    const [block = null] = await this.blocksByTransactionHashes([hash])
    return block
  }

  blocksByHash(hash: Hash, limit?: number) {
    const result: SignedHydratedBlockWithHashMeta[] = []
    let block = this._blockHashMap.get(hash)
    while (block && (limit === undefined || result.length < limit)) {
      result.unshift(block)
      const previousHash = block[0].previous
      block = previousHash ? this._blockHashMap.get(previousHash) : undefined
    }
    return result
  }

  blocksByNumber(blockNumber: XL1BlockNumber, limit?: number) {
    const result: SignedHydratedBlockWithHashMeta[] = []
    let block = this._blockNumberMap.get(blockNumber)
    while (block && (limit === undefined || result.length < limit)) {
      result.unshift(block)
      const previousBlockNumber = asXL1BlockNumber(block[0].block - 1, true)
      block = (previousBlockNumber >= 0) ? this._blockNumberMap.get(previousBlockNumber) : undefined
    }
    return result
  }

  blocksByTransactionHashes(hashes: Hash[]): Promisable<HydratedBlockWithHashMeta[]> {
    return hashes.map(hash => this._transactionHashMap.get(hash)).filter(exists)
  }

  chainId(_blockNumber?: unknown): Promisable<ChainId> {
    throw new Error('Method not implemented.')
  }

  override async createHandler() {
    await super.createHandler()

    this._blockViewer = assertEx(
      this.params.blockViewer ?? await this.locator.getInstance<BlockViewer>(BlockViewerMoniker),
      () => 'BlockViewer instance is required',
    )
    this._blockHashMap = new MemoryMap<Hash, SignedHydratedBlockWithHashMeta>()
    this._blockNumberMap = new MemoryMap<XL1BlockNumber, SignedHydratedBlockWithHashMeta>()
    this._transactionHashMap = new MemoryMap<Hash, SignedHydratedBlockWithHashMeta>()
  }

  currentBlock(): Promisable<SignedHydratedBlockWithHashMeta> {
    return assertEx(this._chain.at(-1))
  }

  currentBlockHash(): Promisable<Hash> {
    return assertEx(this._chain.at(-1)?.[0]._hash)
  }

  currentBlockNumber(): Promisable<XL1BlockNumber> {
    return assertEx(this._chain.at(-1)?.[0].block)
  }

  async payloadByHash(hash: Hash): Promise<WithHashMeta<Payload> | null> {
    const payloads = await this.payloadsByHash([hash])
    return payloads.length > 0 ? payloads[0] : null
  }

  payloadsByHash(_hashes: Hash[]): Promisable<WithHashMeta<Payload>[]> {
    throw new Error('Method not implemented.')
  }

  override async startHandler() {
    await super.startHandler()
    await this.sync()
    this.stopPoll()
    this.startPoll()
  }

  override async stopHandler() {
    await super.stopHandler()
    this.stopPoll()
  }

  private addBlock(block: SignedHydratedBlockWithHashMeta) {
    // Add the new block to the end of the window
    this._chain.push(block)

    // Index the new block
    this._blockHashMap.set(block[0]._hash, block)
    this._blockNumberMap.set(block[0].block, block)
    for (const tx of transactionsFromHydratedBlock(block)) {
      this._transactionHashMap.set(tx._hash, block)
    }

    // Purge only if the window size is exceeded
    while (this._chain.length > this.maxWindowSize) {
      const removedBlock = this._chain.shift()
      if (!removedBlock) break

      this._blockHashMap.delete(removedBlock[0]._hash)
      this._blockNumberMap.delete(removedBlock[0].block)
      for (const tx of transactionsFromHydratedBlock(removedBlock)) {
        this._transactionHashMap.delete(tx._hash)
      }
    }
  }

  private startPoll() {
    this._timerId = setInterval(() => {
      void this.sync()
    }, this.syncInterval)
  }

  private stopPoll() {
    if (this._timerId) {
      clearInterval(this._timerId)
    }
    this._timerId = null
  }

  private async sync() {
    if (this._syncMutex.isLocked()) {
      return
    }
    return await this._syncMutex.runExclusive(async () => {
      try {
        let cursor: SignedHydratedBlockWithHashMeta | null = await this._blockViewer.currentBlock()
        const previousHead = this._chain.length > 0 ? await this.currentBlockHash() : null
        const newBlocks: SignedHydratedBlockWithHashMeta[] = []
        while (!isNull(cursor) && cursor[0]._hash !== previousHead && newBlocks.length < this.maxWindowSize) {
          newBlocks.unshift(cursor)
          const previousHash = newBlocks[0][0].previous
          cursor = isNull(previousHash) ? null : await this._blockViewer.blockByHash(previousHash)
        }
        for (const block of newBlocks) {
          this.addBlock(block)
        }
      } catch (ex) {
        console.error('Error during sync:', ex)
      }
    })
  }
}
