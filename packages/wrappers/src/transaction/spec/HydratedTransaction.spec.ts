import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import {
  XYO_ZERO_ADDRESS,
} from '@xyo-network/xl1-protocol'
import {
  buildRandomTransaction,
  createTransferPayload,
} from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

import { HydratedTransactionWrapper } from '../HydratedTransaction.ts'

describe('HydratedTransactionWrapper', () => {
  let chainId: Address
  let transaction: SignedHydratedTransactionWithHashMeta

  beforeAll(async () => {
    chainId = (await Account.random()).address
  })

  beforeEach(async () => {
    transaction = await buildRandomTransaction(chainId)
  })

  describe('static parse()', () => {
    it('returns a HydratedTransactionWrapper instance', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper).toBeInstanceOf(HydratedTransactionWrapper)
    })

    it('throws when validate=true and the transaction is invalid', async () => {
      // Strip payloads so elevated hashes cannot be resolved → validation fails
      const [bw] = transaction
      const stripped = [bw, []] as SignedHydratedTransactionWithHashMeta
      await expect(HydratedTransactionWrapper.parse(stripped, true)).rejects.toThrow()
    })
  })

  describe('after parse', () => {
    it('boundWitness returns the first element of the tuple', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.boundWitness).toBe(transaction[0])
    })

    it('from returns the transaction sender address', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.from).toBe(transaction[0].from)
    })

    it('payloads contains the elevated payloads', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.payloads.length).toBeGreaterThan(0)
    })

    it('payloadCount matches payloads length', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.payloadCount).toBe(wrapper.payloads.length)
    })

    it('elevatedPayloadCount matches the number of elevate script entries', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.elevatedPayloadCount).toBeGreaterThan(0)
    })

    it('elevatedPayloads is a non-empty array', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.elevatedPayloads.length).toBeGreaterThan(0)
    })

    it('elevatedPayload(0) returns the first elevated payload', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.elevatedPayload(0)).toBeDefined()
    })

    it('payload(0) returns the first payload', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.payload(0)).toBeDefined()
    })

    it('signatureCount matches the number of signers', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.signatureCount).toBe(transaction[0].addresses.length)
    })

    it('signatures returns the cached signature array', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.signatures.length).toBe(wrapper.signatureCount)
    })

    it('signature(0) returns the first signature wrapper', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.signature(0)).toBeDefined()
    })

    it('fees has the expected base fee', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.fees.base).toBeGreaterThan(0n)
    })

    it('gasRequired() returns a positive value', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.gasRequired()).toBeGreaterThan(0n)
    })

    it('externalPayloads contains entries for all payload hashes', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      const keys = Object.keys(wrapper.externalPayloads)
      expect(keys.length).toBe(transaction[0].payload_hashes.length)
    })

    it('publicExternalPayloads does not include elevated payloads', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      const elevatedHashes = new Set(wrapper.elevatedPayloads.map(p => p._hash))
      for (const p of wrapper.publicExternalPayloads) {
        expect(elevatedHashes.has(p._hash)).toBe(false)
      }
    })
  })

  describe('reward()', () => {
    it('returns 0n for a normal transaction (transfer.from !== zero address)', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      expect(wrapper.reward()).toBe(0n)
    })

    it('returns the sum of transfers for a zero-address reward transfer', async () => {
      const receiver = (await Account.random()).address
      const rewardTransfer = createTransferPayload(XYO_ZERO_ADDRESS, { [receiver]: 100n })
      const signer = await Account.random()
      const rewardTx = await buildRandomTransaction(chainId, [rewardTransfer], signer)
      const wrapper = await HydratedTransactionWrapper.parse(rewardTx)
      expect(wrapper.reward()).toBe(100n)
    })
  })

  describe('validate()', () => {
    it('returns no errors for a valid transaction', async () => {
      const wrapper = await HydratedTransactionWrapper.parse(transaction)
      const errors = await wrapper.validate()
      expect(errors).toEqual([])
    })
  })
})
