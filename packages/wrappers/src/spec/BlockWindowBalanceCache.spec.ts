import type { Address, Hash } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import type { HydratedBlockRangeStore } from '../BlockWindow.ts'
import { BlockWindowBalanceCache } from '../BlockWindowBalanceCache.ts'

const hash0 = '0000000000000000000000000000000000000000000000000000000000000000' as Hash
const hash1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' as Hash

const mockStore: HydratedBlockRangeStore = {
  count: 0,
  numberRange: [0, 0],
  range: [hash0, hash1],
  first: () => { throw new Error('not implemented') },
  fromHash: () => { throw new Error('not implemented') },
  fromNumber: () => { throw new Error('not implemented') },
  last: () => { throw new Error('not implemented') },
  next: () => { throw new Error('not implemented') },
  prev: () => { throw new Error('not implemented') },
}

describe('BlockWindowBalanceCache', () => {
  const cache = new BlockWindowBalanceCache(mockStore)

  describe('balance()', () => {
    it('throws Method not implemented', () => {
      const address = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
      expect(() => cache.balance(address)).toThrow('Method [balance] not implemented.')
    })
  })
})
