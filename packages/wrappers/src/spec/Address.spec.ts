import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { AddressWrapper } from '../Address.ts'

describe('AddressWrapper', () => {
  let validAddress: Address

  beforeAll(async () => {
    validAddress = (await Account.random()).address
  })

  describe('static validateValue()', () => {
    it('returns no errors for a valid address', async () => {
      expect(await AddressWrapper.validateValue(validAddress)).toEqual([])
    })

    it('returns an error for an invalid address', async () => {
      const errors = await AddressWrapper.validateValue('not-an-address')
      expect(errors.length).toBeGreaterThan(0)
    })

    it('returns an error for undefined', async () => {
      const errors = await AddressWrapper.validateValue(undefined)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('create()', () => {
    it('succeeds with a valid address', async () => {
      const wrapper = await AddressWrapper.create(validAddress) as unknown as AddressWrapper
      expect(wrapper.address).toBe(validAddress)
    })

    it('throws with an invalid address', async () => {
      await expect(AddressWrapper.create('not-an-address' as Address)).rejects.toThrow()
    })
  })

  describe('address getter', () => {
    it('returns the wrapped address value', async () => {
      const wrapper = await AddressWrapper.create(validAddress) as unknown as AddressWrapper
      expect(wrapper.address).toBe(validAddress)
    })
  })

  describe('validate()', () => {
    it('returns no errors for a valid address', async () => {
      const wrapper = await AddressWrapper.create(validAddress) as unknown as AddressWrapper
      expect(await wrapper.validate()).toEqual([])
    })
  })
})
