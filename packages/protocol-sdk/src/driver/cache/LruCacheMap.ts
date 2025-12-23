import { LRUCache } from 'lru-cache'

import type { SyncMap } from '../../map/index.ts'

export class LruCacheMap<K extends {}, V extends {} | string | number | bigint, FC = () => void> implements SyncMap<K, V> {
  private lruCache: LRUCache<K, V, FC>

  constructor(options?: LRUCache.Options<K, V, FC>) {
    this.lruCache = new LRUCache<K, V, FC>(options ?? { max: 5000 })
  }

  clear(): void {
    this.lruCache.clear()
  }

  delete(id: K): boolean {
    return this.lruCache.delete(id)
  }

  get(id: K): V | undefined {
    return this.lruCache.get(id)
  }

  getMany(id: K[]): V[] {
    const results: V[] = []
    for (const key of id) {
      const value = this.lruCache.get(key)
      if (value !== undefined) {
        results.push(value)
      }
    }
    return results
  }

  has(id: K): boolean {
    return this.lruCache.has(id)
  }

  set(id: K, data: V) {
    this.lruCache.set(id, data)
  }

  setMany(entries: [K, V][]): void {
    for (const [key, value] of entries) {
      this.lruCache.set(key, value)
    }
  }
}
