import { isDefined } from '@xylabs/sdk-js'

import type { SyncMap } from '../../map/index.ts'

export class MemoryMap<K extends {}, V = {}> implements SyncMap<K, V> {
  private map: Map<K, V>

  constructor() {
    this.map = new Map<K, V>()
  }

  clear(): void {
    this.map.clear()
  }

  delete(id: K): boolean {
    return this.map.delete(id)
  }

  get(id: K): V | undefined {
    return this.map.get(id)
  }

  getMany(ids: K[]): V[] {
    const results: V[] = []
    for (const id of ids) {
      const data = this.map.get(id)
      if (isDefined(data)) {
        results.push(data)
      }
    }
    return results
  }

  has(id: K): boolean {
    return this.map.has(id)
  }

  set(id: K, data: V) {
    this.map.set(id, data)
  }

  setMany(entries: [K, V][]): void {
    for (const [key, value] of entries) {
      this.map.set(key, value)
    }
  }
}
