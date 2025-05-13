import type { BaseParams } from '@xylabs/base'
import type { Hash } from '@xylabs/hex'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { ModuleBaseEmitter } from '@xyo-network/module-event-emitter'

import type { ChainIteratorEventData } from './ChainIteratorEventData.ts'
import type { BlockBoundWitness } from './protocol/index.ts'
import type { IterableRepository, ReadRepository } from './repository/index.ts'
import type { BaseServiceParams, ChainIdentification } from './services/index.ts'

export interface ChainIterator<TKey, THead> extends ReadRepository<TKey, BlockBoundWitness>, IterableRepository<TKey, BlockBoundWitness> {
  chainIdentification: ChainIdentification
  head(): Promise<THead>
  previous(cursor?: TKey | undefined, limit?: number): Promise<BlockBoundWitness[]>
  updateHead(head: THead): Promise<void>
}

export interface EventingChainIterator<TKey, THead> extends ChainIterator<TKey, THead>, ModuleBaseEmitter<BaseParams, ChainIteratorEventData> { }

export interface ChainBlockNumberIterator extends ChainIterator<number, BlockBoundWitness> { }
export interface EventingChainBlockNumberIterator extends EventingChainIterator<number, BlockBoundWitness> { }

export interface ChainHashIterator extends ChainIterator<Hash, Hash> { }
export interface EventingChainHashIterator extends EventingChainIterator<Hash, Hash> { }

export interface XyoChainIteratorParams extends BaseServiceParams {
  chainArchivist: ArchivistInstance
  head: BlockBoundWitness
}
