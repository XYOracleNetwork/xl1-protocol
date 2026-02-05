export interface SyncMapRead<K, V> {
  get(id: K): V | undefined
  getMany(id: K[]): V[]
  has(id: K): boolean
}

/**
 * @deprecated Use SyncMapRead instead
 */
export interface SynchronousMapRead<K, V> extends SyncMapRead<K, V> {}

export interface SyncMapWrite<K, V> {
  clear(): void
  delete(id: K): boolean
  set(id: K, data: V): K | undefined | void
  setMany(entries: [K, V][]): K[] | void
}

/**
 * @deprecated Use SyncMapWrite instead
 */
export interface SynchronousMapWrite<K, V> extends SyncMapWrite<K, V> {}

export interface SyncMap<K, V> extends SyncMapRead<K, V>, SyncMapWrite<K, V> {}
/**
 * @deprecated Use SyncMap instead
 */
export interface SynchronousMap<K, V> extends SyncMap<K, V> {}

export interface SyncIterableMapRead<K, V> extends SyncMapRead<K, V>, Iterable<[K, V]> {}
export interface SyncIterableMapWrite<K, V> extends SyncMapWrite<K, V>, Iterable<[K, V]> {}
export interface SyncIterableMap<K, V> extends SyncMap<K, V>, Iterable<[K, V]> {}
