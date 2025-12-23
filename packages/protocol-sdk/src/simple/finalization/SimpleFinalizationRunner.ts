import { type Hash } from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import { type SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { ChainStoreWrite } from '../../model/index.ts'
import { payloadMapFromStore } from '../../primitives/index.ts'
import { type FinalizationRunner, FinalizationRunnerMoniker } from '../../runners/index.ts'

export interface SimpleFinalizationRunnerParams extends CreatableProviderParams {
  finalizedArchivist: ArchivistInstance
}

@creatableProvider()
export class SimpleFinalizationRunner extends AbstractCreatableProvider<SimpleFinalizationRunnerParams> implements FinalizationRunner {
  static readonly defaultMoniker = FinalizationRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [FinalizationRunnerMoniker]
  moniker = SimpleFinalizationRunner.defaultMoniker

  protected _store: ChainStoreWrite | undefined

  protected get store() {
    return this._store!
  }

  override async createHandler() {
    await super.createHandler()
    this._store = { chainMap: payloadMapFromStore(this.params.finalizedArchivist) }
  }

  async finalizeBlock(block: SignedHydratedBlockWithHashMeta): Promise<Hash> {
    return (await this.finalizeBlocks([block]))[0]
  }

  async finalizeBlocks(blocks: SignedHydratedBlockWithHashMeta[]): Promise<Hash[]> {
    const sortedBlocks = blocks.toSorted((a, b) => a[0].block - b[0].block)
    const payloads = sortedBlocks.flatMap(block => [...block[1], block[0]].map(p => ([p._hash, p] as [Hash, WithStorageMeta<Payload>])))
    await this.store.chainMap.setMany(payloads)
    return sortedBlocks.map(b => b[0]._hash)
  }
}
