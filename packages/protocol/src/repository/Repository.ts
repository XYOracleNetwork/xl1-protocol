import type { Hash, Promisable } from '@xylabs/sdk-js'
import type {
  NextOptions, Payload, WithStorageMeta,
} from '@xyo-network/sdk-js'

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
