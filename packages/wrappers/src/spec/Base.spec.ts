import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { AddressWrapper } from '../Address.ts'
import { BaseWrapper } from '../Base.ts'

// Minimal concrete subclass for testing BaseWrapper directly
class StringWrapper extends BaseWrapper<string> {
  get val(): string {
    return this.value
  }
}

describe('BaseWrapper', () => {
  describe('static validateValue()', () => {
    it('returns empty array for any value by default', () => {
      expect(BaseWrapper.validateValue('anything')).toEqual([])
      expect(BaseWrapper.validateValue(null)).toEqual([])
    })
  })

  describe('static validateConfig()', () => {
    it('returns empty array for any config by default', () => {
      expect(BaseWrapper.validateConfig({})).toEqual([])
    })
  })

  describe('create()', () => {
    it('creates an instance when validation passes', async () => {
      const wrapper = await StringWrapper.create('hello') as unknown as StringWrapper
      expect(wrapper.val).toBe('hello')
    })

    it('throws when validateValue returns errors', async () => {
      const _address = (await Account.random()).address
      // AddressWrapper.create() rejects non-address strings
      await expect(AddressWrapper.create('not-an-address' as Address)).rejects.toThrow()
    })

    it('exposes provider from config', async () => {
      const fakeProvider = {} as never
      const wrapper = await StringWrapper.create('hi', { provider: fakeProvider }) as unknown as StringWrapper
      expect(wrapper.provider).toBe(fakeProvider)
    })

    it('provider is undefined when no config provided', async () => {
      const wrapper = await StringWrapper.create('hi') as unknown as StringWrapper
      expect(wrapper.provider).toBeUndefined()
    })
  })

  describe('validate()', () => {
    it('returns empty array by default', async () => {
      const wrapper = await StringWrapper.create('hi') as unknown as StringWrapper
      expect(await wrapper.validate()).toEqual([])
    })
  })
})
