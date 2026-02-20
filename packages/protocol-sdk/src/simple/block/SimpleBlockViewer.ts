import type { Hash } from '@xylabs/sdk-js'
import {
  assertEx, exists, isUndefined,
} from '@xylabs/sdk-js'
import type {
  Payload, ReadArchivist,
  WithHashMeta,
} from '@xyo-network/sdk-js'
import { isAnyPayload, PayloadBuilder } from '@xyo-network/sdk-js'
import {
  asSignedHydratedBlockWithHashMeta, asSignedHydratedBlockWithStorageMeta, asXL1BlockNumber,
  BlockContextRead,
  BlockRate, BlockViewer, BlockViewerMoniker, ChainContextRead, ChainContractViewer, ChainContractViewerMoniker,
  ChainId, DataLakeViewer, DataLakeViewerMoniker, FinalizationViewer, FinalizationViewerMoniker, type SignedHydratedBlockWithHashMeta,
  SignedHydratedBlockWithStorageMeta, SingleTimeConfig, TimeDurations, type XL1BlockNumber, XL1BlockRange,
} from '@xyo-network/xl1-protocol'

import { hydrateBlock } from '../../block/index.ts'
import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import { LruCacheMap } from '../../driver/index.ts'
import { ChainStoreRead } from '../../model/index.ts'
import {
  calculateBlockRate, calculateStepSizeRate, calculateTimeRate, hydratedBlockByNumber, readPayloadMapFromStore,
} from '../../primitives/index.ts'
import { HydratedCache } from '../../utils/index.ts'

export interface SimpleBlockViewerParams extends CreatableProviderParams {
  chainContractViewer?: ChainContractViewer
  finalizedArchivist: ReadArchivist
}

@creatableProvider()
export class SimpleBlockViewer extends AbstractCreatableProvider<SimpleBlockViewerParams> implements BlockViewer {
  static readonly defaultMoniker = BlockViewerMoniker
  static readonly dependencies = [FinalizationViewerMoniker, ChainContractViewerMoniker]
  static readonly monikers = [BlockViewerMoniker]
  moniker = SimpleBlockViewer.defaultMoniker

  protected _store?: ChainStoreRead
  protected chainContractViewer!: ChainContractViewer
  protected dataLakeViewer?: DataLakeViewer
  protected finalizationViewer!: FinalizationViewer
  protected payloadCache = new LruCacheMap<Hash, WithHashMeta<Payload>>({ max: 10_000 })
  protected signedHydratedBlockWithDataLakePayloadsCache = new LruCacheMap<Hash, SignedHydratedBlockWithHashMeta>({ max: 2000, ttl: 1000 * 60 * 60 })

  private _signedHydratedBlockCache: HydratedCache<SignedHydratedBlockWithStorageMeta> | undefined

  get finalizedArchivist(): ReadArchivist {
    return this.params.finalizedArchivist
  }

  protected get hydratedBlockCache(): HydratedCache<SignedHydratedBlockWithStorageMeta> {
    if (this._signedHydratedBlockCache) return this._signedHydratedBlockCache
    const context = this.getBlockContextRead()
    this._signedHydratedBlockCache = new HydratedCache<SignedHydratedBlockWithStorageMeta>(context, async (
      context,
      hash: Hash,
      maxDepth?: number,
      minDepth?: number,
    ) => {
      const result = await hydrateBlock(context, hash, maxDepth, minDepth)
      return asSignedHydratedBlockWithStorageMeta(result, true)
    }, 2000)
    return this._signedHydratedBlockCache
  }

  protected get store() {
    return this._store!
  }

  static override async paramsHandler(params: Partial<SimpleBlockViewerParams>) {
    return {
      ...await super.paramsHandler(params),
      finalizedArchivist: assertEx(params.finalizedArchivist, () => 'finalizedArchivist is required'),
    } satisfies SimpleBlockViewerParams
  }

  async blockByHash(hash: Hash): Promise<SignedHydratedBlockWithHashMeta | null> {
    return await this.spanAsync('blockByHash', async () => {
      const cachedBlock = this.signedHydratedBlockWithDataLakePayloadsCache.get(hash)
      if (cachedBlock) {
        return cachedBlock
      }

      const cache = this.hydratedBlockCache
      const block = await cache.get(hash)
      const result = block ? await this.addDataLakePayloadsToBlock(block) : null
      if (result) {
        this.signedHydratedBlockWithDataLakePayloadsCache.set(hash, result)
      }
      return result
    }, this.context)
  }

  async blockByNumber(blockNumber: XL1BlockNumber): Promise<SignedHydratedBlockWithHashMeta | null> {
    return await this.spanAsync('blockByNumber', async () => {
      const [head] = await this.currentBlock()
      if (isUndefined(head)) {
        return null
      }
      const block = asSignedHydratedBlockWithHashMeta(await hydratedBlockByNumber(await this.getChainContextRead(), blockNumber)) ?? null
      return block ? await this.addDataLakePayloadsToBlock(block) : null
    }, this.context)
  }

  async blocksByHash(hash: Hash, limit = 50): Promise<SignedHydratedBlockWithHashMeta[]> {
    return await this.spanAsync('blocksByHash', async () => {
      assertEx(limit > 0, () => 'limit must be greater than 0')
      assertEx(limit <= 100, () => 'limit must be less than 100')
      const blocks: SignedHydratedBlockWithHashMeta[] = []
      let current = await this.blockByHash(hash)
      while (current && blocks.length < limit) {
        blocks.push(current)
        const previousHash = current[0].previous
        if (previousHash === null) break
        current = await this.blockByHash(previousHash)
      }
      return blocks.map(b => asSignedHydratedBlockWithHashMeta(b, true))
    }, this.context)
  }

  async blocksByNumber(blockNumber: XL1BlockNumber, limit = 50): Promise<SignedHydratedBlockWithHashMeta[]> {
    return await this.spanAsync('blocksByNumber', async () => {
      assertEx(limit > 0, () => 'limit must be greater than 0')
      assertEx(limit <= 100, () => 'limit must be less than 100')
      const blocks: SignedHydratedBlockWithHashMeta[] = []
      let current = await this.blockByNumber(blockNumber)
      while (current && blocks.length < limit) {
        blocks.push(current)
        if (current[0].block === 0) break
        const previousNumber = asXL1BlockNumber(current[0].block - 1, true)
        current = await this.blockByNumber(previousNumber)
      }
      return blocks.map(b => asSignedHydratedBlockWithHashMeta(b, true))
    }, this.context)
  }

  chainId(): Promise<ChainId>
  chainId(blockNumber: XL1BlockNumber): Promise<ChainId>
  chainId(blockNumber: 'latest'): Promise<ChainId>
  async chainId(blockNumber: XL1BlockNumber | 'latest' = 'latest'): Promise<ChainId> {
    return await this.spanAsync('chainId', async () => {
      return blockNumber === 'latest' ? await this.chainContractViewer.chainId() : await this.chainContractViewer.chainIdAtBlockNumber(blockNumber)
    }, this.context)
  }

  override async createHandler() {
    await super.createHandler()
    this.chainContractViewer = this.params.chainContractViewer ?? assertEx(
      await this.locateAndCreate<ChainContractViewer>(ChainContractViewerMoniker),
      () => 'chainContractViewer is required',
    )
    this.dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
    this.finalizationViewer = await this.locator.getInstance<FinalizationViewer>(FinalizationViewerMoniker)
    this._store = { chainMap: readPayloadMapFromStore(this.params.finalizedArchivist) }
  }

  async currentBlock(): Promise<SignedHydratedBlockWithHashMeta> {
    return await this.addDataLakePayloadsToBlock(await this.finalizationViewer.head())
  }

  async currentBlockHash(): Promise<Hash> {
    return await this.finalizationViewer.headHash()
  }

  async currentBlockNumber(): Promise<XL1BlockNumber> {
    return await this.finalizationViewer.headNumber()
  }

  async payloadByHash(hash: Hash): Promise<WithHashMeta<Payload> | null> {
    const [payload] = await this.payloadsByHash([hash])
    return payload ?? null
  }

  async payloadsByHash(hashes: Hash[]): Promise<WithHashMeta<Payload>[]> {
    let remainingHashes = [...hashes]
    const cachedPayloads = this.payloadCache.getMany(remainingHashes)
    const cachedHashes = new Set(cachedPayloads.map(p => p._hash))
    remainingHashes = remainingHashes.filter(h => !cachedHashes.has(h))
    const finalizedPayloads = remainingHashes.length > 0
      ? await this.finalizedArchivist.get(remainingHashes)
      : []
    const resultPayloads = await this.addDataLakePayloadsToPayloads(hashes, [...cachedPayloads, ...finalizedPayloads.filter(exists)])
    resultPayloads.map((payload) => {
      this.payloadCache.set(payload._hash, payload)
    })
    return resultPayloads
  }

  async rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await calculateBlockRate(this, range, timeUnit)
  }

  async stepSizeRate(start: XL1BlockNumber, stepIndex: number, count = 1, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await calculateStepSizeRate(this, start, stepIndex, count, timeUnit)
  }

  async timeDurationRate(
    timeConfig: SingleTimeConfig,
    startBlockNumber?: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promise<BlockRate> {
    return await calculateTimeRate(this, timeConfig, startBlockNumber, timeUnit, toleranceMs, maxAttempts)
  }

  protected async addDataLakePayloadsToBlock(block: SignedHydratedBlockWithHashMeta): Promise<SignedHydratedBlockWithHashMeta> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return block
    const missingPayloadHashes = block[0].payload_hashes.filter(hash => !block[1].some(p => p._hash === hash))
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload))
    return asSignedHydratedBlockWithHashMeta([block[0], [...block[1], ...payloadsFromDataLake]], true)
  }

  protected async addDataLakePayloadsToPayloads(hashes: Hash[], payloads: WithHashMeta<Payload>[]): Promise<WithHashMeta<Payload>[]> {
    const dataLakeViewer = this.dataLakeViewer
    if (!dataLakeViewer) return payloads
    const missingPayloadHashes = hashes.filter(hash => !payloads.some(p => p._hash === hash))
    const payloadsFromDataLake = await PayloadBuilder.addHashMeta(
      await PayloadBuilder.addHashMeta((await dataLakeViewer.get(missingPayloadHashes)).filter(isAnyPayload)),
    )
    return [...payloads, ...payloadsFromDataLake]
  }

  protected getBlockContextRead(): BlockContextRead {
    return {
      ...this.context,
      chainMap: this.store.chainMap,
    }
  }

  protected async getChainContextRead(): Promise<ChainContextRead> {
    return {
      ...this.getBlockContextRead(),
      head: (await this.finalizationViewer.head())[0],
    }
  }
}
