import type { Hash } from '@xylabs/sdk-js'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import { LRUCache } from 'lru-cache'

import type { PayloadMapRead } from '../model/index.ts'

export type HydrateFunction<T> = (
  context: { chainMap: PayloadMapRead<WithStorageMeta<Payload>> },
  hash: Hash,
) => Promise<T | undefined>

export class HydratedCache<T extends {}> {
  protected readonly cache: LRUCache<Hash, T>
  protected readonly chainMap: PayloadMapRead<WithStorageMeta<Payload>>
  protected readonly hydrateFunction: HydrateFunction<T>

  constructor(
    chainMap: PayloadMapRead<WithStorageMeta<Payload>>,
    hydrateFunction: HydrateFunction<T>,
    maxSize: number = 200,
  ) {
    this.chainMap = chainMap
    this.hydrateFunction = hydrateFunction
    this.cache = new LRUCache<Hash, T>({ max: maxSize })
  }

  async get(hash: Hash): Promise<T | null> {
    const existing = this.cache.get(hash)
    if (existing !== undefined) return existing
    const block = (await this.hydrateFunction({ chainMap: this.chainMap }, hash)) ?? null
    if (block !== null) this.cache.set(hash, block)
    return block
  }

  has(hash: Hash): boolean {
    return this.cache.has(hash)
  }
}
