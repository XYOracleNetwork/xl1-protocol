import type { Address, Hash, Hex } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { SignatureWrapper } from '../Signature.ts'

describe('SignatureWrapper', () => {
  let validAddress: Address
  let validHash: Hash
  let validSignature: Hex

  beforeAll(async () => {
    const account = await Account.random()
    const chainId = account.address
    const [tx] = await buildRandomTransaction(chainId)
    validHash = await PayloadBuilder.dataHash(tx) as Hash
    validAddress = tx.addresses[0] as Address
    validSignature = tx.$signatures[0] as Hex
  })

  describe('constructor', () => {
    it('stores signature, address, and hash', () => {
      const wrapper = new SignatureWrapper(validSignature, validAddress, validHash)
      expect(wrapper.signature).toBe(validSignature)
      expect(wrapper.address).toBe(validAddress)
      expect(wrapper.hash).toBe(validHash)
    })
  })

  describe('static validate()', () => {
    it('returns no errors for a valid signature', async () => {
      const errors = await SignatureWrapper.validate(validHash, validAddress, validSignature)
      expect(errors).toEqual([])
    })

    it('returns errors for a mismatched address', async () => {
      const wrongAddress = (await Account.random()).address
      const errors = await SignatureWrapper.validate(validHash, wrongAddress, validSignature)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('validate()', () => {
    it('returns no errors for a valid wrapper', async () => {
      const wrapper = new SignatureWrapper(validSignature, validAddress, validHash)
      expect(await wrapper.validate()).toEqual([])
    })

    it('returns errors when address does not match the signature', async () => {
      const wrongAddress = (await Account.random()).address
      const wrapper = new SignatureWrapper(validSignature, wrongAddress, validHash)
      expect((await wrapper.validate()).length).toBeGreaterThan(0)
    })
  })
})
