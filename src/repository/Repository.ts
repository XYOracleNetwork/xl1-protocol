import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { NextOptions } from '@xyo-network/archivist-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'

export interface ReadRepository<TId, TData> {
  get(id: TId): Promisable<TData>
}

export interface IterableRepository<TId, TData> {
  next(id: TId): Promisable<TData>
}

export interface WriteRepository<TData, TResp> {
  insert(data: TData): Promisable<TResp>
}

export interface PayloadReadRepository<TId = Hash, TData extends Payload = Payload> extends ReadRepository<TId[], WithStorageMeta<TData>[]> {}
export interface PayloadWriteRepository<TData extends Payload = Payload> extends WriteRepository<TData[], WithStorageMeta<TData>[]> {}

export interface PayloadIterableRepository<TId = Hash, TData extends Payload = Payload>
  extends IterableRepository<NextOptions<TId>, WithStorageMeta<TData>[]> {}

export interface PayloadRepository<TId = Hash, TData extends Payload = Payload>
  extends PayloadReadRepository<TId, TData>, PayloadWriteRepository<TData>, PayloadIterableRepository<TId, TData> {}
