import {
  assertEx,
  Hash,
} from '@xylabs/sdk-js'
import type { ReadArchivist } from '@xyo-network/archivist-model'
import {
  asSignedHydratedBlockWithStorageMeta, ChainId, type SignedBlockBoundWitnessWithHashMeta, type SignedHydratedBlockWithHashMeta,
  SignedHydratedBlockWithStorageMeta,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import { hydrateBlock } from '../../block/index.ts'
import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import {
  ChainContractViewer, ChainContractViewerMoniker, ChainStoreRead,
} from '../../model/index.ts'
import {
  type FinalizationViewer,
  FinalizationViewerMoniker,
} from '../../model/index.ts'
import { findMostRecentBlock, readPayloadMapFromStore } from '../../primitives/index.ts'
import { HydratedCache } from '../../utils/index.ts'

export interface SimpleFinalizationViewerParams extends CreatableProviderParams {
  finalizedArchivist: ReadArchivist
}

@creatableProvider()
export class SimpleFinalizationViewer extends AbstractCreatableProvider<SimpleFinalizationViewerParams> implements FinalizationViewer {
  static readonly defaultMoniker = FinalizationViewerMoniker
  static readonly dependencies = [ChainContractViewerMoniker]
  static readonly monikers = [FinalizationViewerMoniker]
  moniker = SimpleFinalizationViewer.defaultMoniker

  protected _chainContractViewer!: ChainContractViewer
  protected _chainId!: ChainId
  protected _store: ChainStoreRead | undefined

  private _signedHydratedBlockCache: HydratedCache<SignedHydratedBlockWithStorageMeta> | undefined

  protected get chainContractViewer() {
    return this._chainContractViewer
  }

  protected get chainId() {
    return this._chainId
  }

  protected get finalizedArchivist() {
    return this.params.finalizedArchivist
  }

  protected get hydratedBlockCache(): HydratedCache<SignedHydratedBlockWithStorageMeta> {
    if (this._signedHydratedBlockCache) return this._signedHydratedBlockCache
    const chainMap = this.store.chainMap
    this._signedHydratedBlockCache = new HydratedCache<SignedHydratedBlockWithStorageMeta>(chainMap, async (
      store: ChainStoreRead,
      hash: Hash,
      maxDepth?: number,
      minDepth?: number,
    ) => {
      const result = await hydrateBlock(store, hash, maxDepth, minDepth)
      return asSignedHydratedBlockWithStorageMeta(result, true)
    }, 200)
    return this._signedHydratedBlockCache
  }

  protected get store() {
    return this._store!
  }

  static override async paramsHandler(params: Partial<SimpleFinalizationViewerParams>) {
    return {
      ...await super.paramsHandler(params),
      finalizedArchivist: assertEx(params.finalizedArchivist, () => 'finalizedArchivist is required'),
    } satisfies SimpleFinalizationViewerParams
  }

  override async createHandler() {
    await super.createHandler()
    this._chainContractViewer = await this.locateAndCreate<ChainContractViewer>(ChainContractViewerMoniker)
    this._chainId = await this.chainContractViewer.chainId()
    this._store = { chainMap: readPayloadMapFromStore(this.params.finalizedArchivist) }
  }

  async head(): Promise<SignedHydratedBlockWithHashMeta> {
    return await this.spanAsync('head', async () => {
      const currentHead = assertEx(await this.getCurrentHead(), () => 'Could not find most recent block [currentBlock]')
      const cache = this.hydratedBlockCache
      const block = await cache.get(currentHead._hash)
      if (!block) {
        console.log(`Could not find current block with hash ${currentHead!._hash}`)
      }
      return assertEx(block, () => 'Could not find current block')
    }, { timeBudgetLimit: 200 })
  }

  async headBlock(): Promise<SignedBlockBoundWitnessWithHashMeta> {
    return (await this.head())[0]
  }

  async headHash(): Promise<Hash> {
    return (await this.headBlock())._hash
  }

  async headNumber(): Promise<XL1BlockNumber> {
    return (await this.headBlock()).block
  }

  protected async getCurrentHead() {
    const chainArchivist = this.finalizedArchivist
    const result = assertEx(await findMostRecentBlock(chainArchivist), () => 'Could not find most recent block [getCurrentHead]')
    assertEx(result?.chain === this.chainId, () => 'Chain ID does not match head block chain ID')
    return result
  }
}
