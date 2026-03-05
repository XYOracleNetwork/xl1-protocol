import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { ChainWrapper } from '../chain.ts'

describe('ChainWrapper', () => {
  let chainId: Address

  beforeAll(async () => {
    chainId = (await Account.random()).address
  })

  describe('id getter', () => {
    it('returns the wrapped address', async () => {
      const wrapper = await ChainWrapper.create(chainId) as unknown as ChainWrapper
      expect(wrapper.id).toBe(chainId)
    })
  })

  describe('create()', () => {
    it('creates an instance with the given address', async () => {
      const wrapper = await ChainWrapper.create(chainId) as unknown as ChainWrapper
      expect(wrapper).toBeInstanceOf(ChainWrapper)
    })
  })

  describe('provider', () => {
    it('is undefined when no config is provided', async () => {
      const wrapper = await ChainWrapper.create(chainId) as unknown as ChainWrapper
      expect(wrapper.provider).toBeUndefined()
    })
  })
})
