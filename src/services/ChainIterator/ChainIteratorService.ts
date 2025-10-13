import type { BaseParams } from '@xylabs/base'
import type { BaseEmitter } from '@xylabs/events'
import type { Hash } from '@xylabs/hex'
import type { WithStorageMeta } from '@xyo-network/payload-model'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { ChainId } from '../../model.ts'
import type { IterableRepository, ReadRepository } from '../../repository/index.ts'
import type { ChainIteratorServiceEventData } from './ChainIteratorServiceEventData.ts'

export interface ChainIteratorService<TKey>
  extends ReadRepository<TKey, BlockBoundWitness | undefined>, IterableRepository<TKey, WithStorageMeta<BlockBoundWitness> | undefined> {
  chainId: ChainId
  head(): Promise<WithStorageMeta<BlockBoundWitness>>
  previous(cursor?: TKey | undefined, limit?: number): Promise<WithStorageMeta<BlockBoundWitness>[]>
  updateHead(head: BlockBoundWitness): Promise<void>
}

// /** @deprecated use ChainIteratorService instead */
// export interface ChainIterator<TKey> extends ChainIteratorService<TKey> {}

export interface EventingChainIteratorService<TKey> extends ChainIteratorService<TKey>, BaseEmitter<BaseParams, ChainIteratorServiceEventData> {}

// /** @deprecated use EventingChainIteratorService instead */
// export interface EventingChainIterator<TKey> extends EventingChainIteratorService<TKey> {}

export interface ChainBlockNumberIteratorService extends ChainIteratorService<number> {}

// /** @deprecated use ChainBlockNumberIteratorService instead */
// export interface ChainBlockNumberIterator extends ChainBlockNumberIteratorService {}

export interface EventingChainBlockNumberIteratorService extends EventingChainIteratorService<number> {}

// /** @deprecated use EventingChainBlockNumberIteratorService instead */
// export interface EventingChainBlockNumberIterator extends EventingChainBlockNumberIteratorService {}

export interface ChainHashIteratorService extends ChainIteratorService<Hash> {}

// /** @deprecated use ChainHashIteratorService instead */
// export interface ChainHashIterator extends ChainHashIteratorService {}

export interface EventingChainHashIteratorService extends EventingChainIteratorService<Hash> {}

// /** @deprecated use EventingChainHashIteratorService instead */
// export interface EventingChainHashIterator extends EventingChainHashIteratorService {}
