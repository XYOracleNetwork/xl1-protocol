import type { Hash } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import type { HydratedBlockRangeStore } from '../BlockWindow.ts'
import { BlockWindowWrapper } from '../BlockWindow.ts'

const hash0 = '0000000000000000000000000000000000000000000000000000000000000000' as Hash
const hash1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' as Hash

const mockStore: HydratedBlockRangeStore = {
  count: 10,
  numberRange: [0, 9],
  range: [hash0, hash1],
  first: () => { throw new Error('not implemented') },
  fromHash: () => { throw new Error('not implemented') },
  fromNumber: () => { throw new Error('not implemented') },
  last: () => { throw new Error('not implemented') },
  next: () => { throw new Error('not implemented') },
  prev: () => { throw new Error('not implemented') },
}

describe('BlockWindowWrapper', () => {
  const wrapper = new BlockWindowWrapper(mockStore)

  describe('count getter', () => {
    it('delegates to the store', () => {
      expect(wrapper.count).toBe(10)
    })
  })

  describe('numberRange getter', () => {
    it('delegates to the store', () => {
      expect(wrapper.numberRange).toEqual([0, 9])
    })
  })

  describe('range getter', () => {
    it('delegates to the store', () => {
      expect(wrapper.range).toEqual([hash0, hash1])
    })
  })

  describe('static validate()', () => {
    it('returns an empty array', async () => {
      expect(await BlockWindowWrapper.validate(mockStore)).toEqual([])
    })
  })

  describe('validate()', () => {
    it('returns an empty array', async () => {
      expect(await wrapper.validate()).toEqual([])
    })
  })
})
