import type { Hash } from '@xylabs/sdk-js'
import type { BlockContextRead } from '@xyo-network/xl1-protocol'
import { LRUCache } from 'lru-cache'

export type HydrateFunction<T> = (
  context: BlockContextRead,
  hash: Hash,
) => Promise<T | undefined>

export class HydratedCache<T extends {}> {
  protected readonly cache: LRUCache<Hash, T>
  protected context: BlockContextRead
  protected readonly hydrateFunction: HydrateFunction<T>

  constructor(
    context: BlockContextRead,
    hydrateFunction: HydrateFunction<T>,
    maxCount: number = 2000,
    ttl: number = Number.MAX_SAFE_INTEGER,
  ) {
    this.context = context
    this.hydrateFunction = hydrateFunction
    this.cache = new LRUCache<Hash, T>({ max: maxCount, ttl })
  }

  async get(hash: Hash): Promise<T | null> {
    const existing = this.cache.get(hash)
    if (existing !== undefined) return existing
    const block = (await this.hydrateFunction(this.context, hash)) ?? null
    if (block !== null) this.cache.set(hash, block)
    return block
  }

  has(hash: Hash): boolean {
    return this.cache.has(hash)
  }
}
