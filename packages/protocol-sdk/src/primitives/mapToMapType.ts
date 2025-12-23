import { isDefined } from '@xylabs/sdk-js'

import type { SyncIterableMap } from '../map/index.ts'

export function mapToMapType<K extends {}, V extends {}>(map: Map<K, V> | SyncIterableMap<K, V>): SyncIterableMap<K, V> {
  return {
    get: (key: K) => map.get(key),
    has: (key: K) => map.has(key),
    set: (key: K, value: V) => {
      map.set(key, value)
    },
    setMany: (entries: [K, V][]) => {
      for (const [key, value] of entries) {
        map.set(key, value)
      }
    },
    delete: (key: K) => map.delete(key),
    clear: () => map.clear(),
    getMany: (keys: K[]) => {
      const result: V[] = []
      for (const key of keys) {
        const value = map.get(key)
        if (isDefined(value)) {
          result.push(value)
        }
      }
      return result
    },
    [Symbol.iterator]: function* (): Iterator<[K, V]> {
      for (const entry of map) {
        yield entry
      }
    },
  }
}
