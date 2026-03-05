import type { Address } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { AddressStateWrapper } from '../AddressState.ts'

const validAddress = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address

describe('AddressStateWrapper', () => {
  // Access protected constructor via cast for testing stub behaviour
  const wrapper = new (AddressStateWrapper as unknown as new (v: Address) => AddressStateWrapper)(validAddress)

  describe('address getter', () => {
    it('returns the wrapped address (inherited from AddressWrapper)', () => {
      expect(wrapper.address).toBe(validAddress)
    })
  })

  describe('blockWindow getter', () => {
    it('throws Method not implemented', () => {
      expect(() => wrapper.blockWindow).toThrow('Method [blockWindow] not implemented.')
    })
  })

  describe('balance()', () => {
    it('throws Method not implemented', () => {
      expect(() => wrapper.balance()).toThrow('Method [balance] not implemented.')
    })
  })

  describe('static validateValue()', () => {
    it('returns no errors for a valid address (inherited from AddressWrapper)', async () => {
      expect(await AddressStateWrapper.validateValue(validAddress)).toEqual([])
    })

    it('returns an error for an invalid value (inherited from AddressWrapper)', async () => {
      const errors = await AddressStateWrapper.validateValue('not-an-address')
      expect(errors.length).toBeGreaterThan(0)
    })
  })
})
