import type { BaseParams } from '@xylabs/base'
import type { BaseEmitter } from '@xylabs/events'
import type { Hash, Hex } from '@xylabs/hex'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { IterableRepository, ReadRepository } from '../../repository/index.ts'
import type { ChainIteratorServiceEventData } from './ChainIteratorServiceEventData.ts'

export interface ChainIteratorService<TKey, THead>
  extends ReadRepository<TKey, BlockBoundWitness | undefined>, IterableRepository<TKey, BlockBoundWitness | undefined> {
  chainId: Hex
  head(): Promise<THead>
  previous(cursor?: TKey | undefined, limit?: number): Promise<BlockBoundWitness[]>
  updateHead(head: THead): Promise<void>
}

/** @deprecated use ChainIteratorService instead */
export interface ChainIterator<TKey, THead> extends ChainIteratorService<TKey, THead> {}

export interface EventingChainIteratorService<TKey, THead> extends ChainIteratorService<TKey, THead>, BaseEmitter<BaseParams, ChainIteratorServiceEventData> {}

/** @deprecated use EventingChainIteratorService instead */
export interface EventingChainIterator<TKey, THead> extends EventingChainIteratorService<TKey, THead> {}

export interface ChainBlockNumberIteratorService extends ChainIteratorService<number, BlockBoundWitness> {}

/** @deprecated use ChainBlockNumberIteratorService instead */
export interface ChainBlockNumberIterator extends ChainBlockNumberIteratorService {}

export interface EventingChainBlockNumberIteratorService extends EventingChainIteratorService<number, BlockBoundWitness> {}

/** @deprecated use EventingChainBlockNumberIteratorService instead */
export interface EventingChainBlockNumberIterator extends EventingChainBlockNumberIteratorService {}

export interface ChainHashIteratorService extends ChainIteratorService<Hash, Hash> {}

/** @deprecated use ChainHashIteratorService instead */
export interface ChainHashIterator extends ChainHashIteratorService {}

export interface EventingChainHashIteratorService extends EventingChainIteratorService<Hash, Hash> {}

/** @deprecated use EventingChainHashIteratorService instead */
export interface EventingChainHashIterator extends EventingChainHashIteratorService {}
