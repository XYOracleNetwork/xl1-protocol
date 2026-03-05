import { toHex } from '@xylabs/sdk-js'
import type { TransactionFeesBigInt, TransactionFeesHex } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { FeesWrapper } from '../Fees.ts'

const validHexFees: TransactionFeesHex = {
  base: toHex(1000n),
  gasLimit: toHex(1_000_000n),
  gasPrice: toHex(10n),
  priority: toHex(1n),
}

const validBigIntFees: TransactionFeesBigInt = {
  base: 1000n,
  gasLimit: 1_000_000n,
  gasPrice: 10n,
  priority: 1n,
}

describe('FeesWrapper', () => {
  describe('constructor with hex fees', () => {
    it('parses all fields from hex', () => {
      const wrapper = new FeesWrapper(validHexFees)
      expect(wrapper.base).toBe(1000n)
      expect(wrapper.gasLimit).toBe(1_000_000n)
      expect(wrapper.gasPrice).toBe(10n)
      expect(wrapper.priority).toBe(1n)
    })
  })

  describe('constructor with bigint fees', () => {
    it('parses all fields from bigint', () => {
      const wrapper = new FeesWrapper(validBigIntFees)
      expect(wrapper.base).toBe(1000n)
      expect(wrapper.gasLimit).toBe(1_000_000n)
      expect(wrapper.gasPrice).toBe(10n)
      expect(wrapper.priority).toBe(1n)
    })
  })

  describe('static validate()', () => {
    it('returns no errors for valid fees', async () => {
      expect(await FeesWrapper.validate(validHexFees)).toEqual([])
    })

    it('returns an error if base is zero', async () => {
      const errors = await FeesWrapper.validate({ ...validBigIntFees, base: 0n })
      expect(errors.length).toBeGreaterThan(0)
      expect(errors[0].message).toBe('Base fee cannot be negative or zero')
    })

    // AttoXL1 enforces a minimum of 0 via Zod, so negative bigints are rejected
    // before the < 0n guard in validate() is reached. Test the reachable boundaries.
    it('returns no error if gasLimit is zero (guard is < 0n, not <= 0n)', async () => {
      const errors = await FeesWrapper.validate({ ...validBigIntFees, gasLimit: 0n })
      expect(errors).toEqual([])
    })

    it('returns no error if gasPrice is zero', async () => {
      const errors = await FeesWrapper.validate({ ...validBigIntFees, gasPrice: 0n })
      expect(errors).toEqual([])
    })

    it('returns no error if priority is zero', async () => {
      const errors = await FeesWrapper.validate({ ...validBigIntFees, priority: 0n })
      expect(errors).toEqual([])
    })
  })

  describe('validate()', () => {
    it('returns no errors for a valid instance', async () => {
      const wrapper = new FeesWrapper(validHexFees)
      expect(await wrapper.validate()).toEqual([])
    })
  })
})
