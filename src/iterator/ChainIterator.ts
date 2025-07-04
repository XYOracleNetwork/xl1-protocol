import type { BaseParams } from '@xylabs/base'
import type { BaseEmitter } from '@xylabs/events'
import type { Address, Hash } from '@xylabs/hex'

import type { BlockBoundWitness } from '../block/index.ts'
import type { IterableRepository, ReadRepository } from '../repository/index.ts'
import type { ChainIteratorEventData } from './ChainIteratorEventData.ts'

export interface ChainIterator<TKey, THead>
  extends ReadRepository<TKey, BlockBoundWitness | undefined>, IterableRepository<TKey, BlockBoundWitness | undefined> {
  chainId: Address
  head(): Promise<THead>
  previous(cursor?: TKey | undefined, limit?: number): Promise<BlockBoundWitness[]>
  updateHead(head: THead): Promise<void>
}

export interface EventingChainIterator<TKey, THead> extends ChainIterator<TKey, THead>, BaseEmitter<BaseParams, ChainIteratorEventData> { }

export interface ChainBlockNumberIterator extends ChainIterator<number, BlockBoundWitness> { }
export interface EventingChainBlockNumberIterator extends EventingChainIterator<number, BlockBoundWitness> { }

export interface ChainHashIterator extends ChainIterator<Hash, Hash> { }
export interface EventingChainHashIterator extends EventingChainIterator<Hash, Hash> { }
