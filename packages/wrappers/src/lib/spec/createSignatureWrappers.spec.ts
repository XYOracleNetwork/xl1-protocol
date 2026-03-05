import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { SignatureWrapper } from '../../Signature.ts'
import { createSignatureWrappers } from '../createSignatureWrappers.ts'

describe('createSignatureWrappers', () => {
  let chainId: Address

  beforeAll(async () => {
    chainId = (await Account.random()).address
  })

  it('returns one SignatureWrapper per signer', async () => {
    const [bw] = await buildRandomTransaction(chainId)
    const wrappers = await createSignatureWrappers(bw)
    expect(wrappers.length).toBe(bw.$signatures.length)
  })

  it('returns SignatureWrapper instances', async () => {
    const [bw] = await buildRandomTransaction(chainId)
    const wrappers = await createSignatureWrappers(bw)
    for (const wrapper of wrappers) {
      expect(wrapper).toBeInstanceOf(SignatureWrapper)
    }
  })

  it('sets the correct address on each wrapper', async () => {
    const [bw] = await buildRandomTransaction(chainId)
    const wrappers = await createSignatureWrappers(bw)
    for (let i = 0; i < wrappers.length; i++) {
      expect(wrappers[i].address).toBe(bw.addresses[i])
    }
  })

  it('sets the data hash on each wrapper', async () => {
    const [bw] = await buildRandomTransaction(chainId)
    const expectedHash = await PayloadBuilder.dataHash(bw)
    const wrappers = await createSignatureWrappers(bw)
    for (const wrapper of wrappers) {
      expect(wrapper.hash).toBe(expectedHash)
    }
  })

  it('returns valid wrappers that pass signature validation', async () => {
    const [bw] = await buildRandomTransaction(chainId)
    const wrappers = await createSignatureWrappers(bw)
    for (const wrapper of wrappers) {
      const errors = await wrapper.validate()
      expect(errors).toEqual([])
    }
  })
})
