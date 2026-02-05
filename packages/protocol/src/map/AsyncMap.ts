import type { Promisable } from '@xylabs/sdk-js'

export interface AsyncMapRead<K, V> {
  get(id: K): Promisable<V | undefined>
  getMany(id: K[]): Promisable<V[]>
  has(id: K): Promisable<boolean>
}
/**
 * @deprecated Use AsyncMapRead instead
 */
export interface AsynchronousMapRead<K, V> extends AsyncMapRead<K, V> {}

export interface AsyncMapWrite<K, V> {
  clear(): Promisable<void>
  delete(id: K): Promisable<boolean>
  set(id: K, data: V): Promisable<K | undefined | void>
  setMany(entries: [K, V][]): Promisable<K[] | void>
}
/**
 * @deprecated Use AsyncMapWrite instead
 */
export interface AsynchronousMapWrite<K, V> extends AsyncMapWrite<K, V> {}

export interface AsyncMap<K, V> extends AsyncMapRead<K, V>, AsyncMapWrite<K, V> {}
/**
 * @deprecated Use AsyncMap instead
 */
export interface AsynchronousMap<K, V> extends AsyncMap<K, V> {}

export interface AsyncIterableMapRead<K, V>extends AsyncMapRead<K, V>, AsyncIterable<[K, V]> {}
export interface AsyncIterableMapWrite<K, V>extends AsyncMapWrite<K, V>, AsyncIterable<[K, V]> {}
export interface AsyncIterableMap<K, V>extends AsyncMap<K, V>, AsyncIterable<[K, V]> {}
