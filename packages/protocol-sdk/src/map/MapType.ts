import type {
  AsyncIterableMap, AsyncIterableMapRead, AsyncIterableMapWrite, AsyncMap, AsyncMapRead, AsyncMapWrite,
} from './AsyncMap.ts'
import type {
  SyncIterableMap, SyncIterableMapRead, SyncIterableMapWrite, SyncMap, SyncMapRead, SyncMapWrite,
} from './SyncMap.ts'

export type MapType<TId, TData> = SyncMap<TId, TData> | AsyncMap<TId, TData>

export type MapTypeRead<TId, TData> = SyncMapRead<TId, TData> | AsyncMapRead<TId, TData>

export type MapTypeWrite<TId, TData> = SyncMapWrite<TId, TData> | AsyncMapWrite<TId, TData>

export type AsynchronousMapType<TId, TData> = AsyncMapRead<TId, TData> & AsyncMapWrite<TId, TData>

export type IterableMapRead<TId, TData> = SyncIterableMapRead<TId, TData> | AsyncIterableMapRead<TId, TData>

export type IterableMapWrite<TId, TData> = SyncIterableMapWrite<TId, TData> | AsyncIterableMapWrite<TId, TData>

export type IterableMap<TId, TData> = SyncIterableMap<TId, TData> | AsyncIterableMap<TId, TData>
