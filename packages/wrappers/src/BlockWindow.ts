import type { Hash, Promisable } from '@xylabs/sdk-js'
import type { HydratedBlock } from '@xyo-network/xl1-protocol'
import type { BlockWindowInstance } from '@xyo-network/xl1-protocol-sdk'

export interface HydratedBlockRangeStore extends BlockWindowInstance {
  first(): Promisable<HydratedBlock>
  fromHash(hash: Hash): Promisable<HydratedBlock>
  fromNumber(number: number): Promisable<HydratedBlock>
  last(): Promisable<HydratedBlock>
  next(): Promisable<HydratedBlock>
  next(count: number): Promisable<HydratedBlock[]>
  prev(): Promisable<HydratedBlock>
  prev(count: number): Promisable<HydratedBlock[]>
}

export class BlockWindowWrapper implements BlockWindowInstance {
  private _store: HydratedBlockRangeStore

  constructor(store: HydratedBlockRangeStore) {
    this._store = store
  }

  get count() {
    return this._store.count
  }

  get numberRange() {
    return this._store.numberRange
  }

  get range() {
    return this._store.range
  }

  static validate(_store: HydratedBlockRangeStore): Promisable<Error[]> {
    return [] // TODO: Implement validation logic
  }

  async validate(): Promise<Error[]> {
    return await BlockWindowWrapper.validate(this._store)
  }
}
