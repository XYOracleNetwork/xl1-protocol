import type { Address, Promisable } from '@xylabs/sdk-js'

import type { HydratedBlockRangeStore } from './BlockWindow.ts'

export interface BlockWindowBalanceCacheInstance {
  balance(address: Address): Promisable<bigint>
}

export class BlockWindowBalanceCache implements BlockWindowBalanceCacheInstance {
  private _store: HydratedBlockRangeStore

  constructor(store: HydratedBlockRangeStore) {
    this._store = store
  }

  balance(_address: Address): Promisable<bigint> {
    throw new Error('Method [balance] not implemented.')
  }
}
