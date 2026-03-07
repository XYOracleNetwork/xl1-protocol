import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import { buildTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { TransactionDurationValidator } from '../TransactionDurationValidator.ts'

describe('TransactionDurationValidator', () => {
  const chainId = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  const context = {
    chainId,
    singletons: {},
    caches: {},
  }
  let signer: AccountInstance
  beforeAll(async () => {
    signer = await Account.random()
  })
  describe('with valid duration', () => {
    it('should return no errors', async () => {
      const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(1000, true))
      const errors = await TransactionDurationValidator(context, hydratedTransaction)
      expect(errors.length).toBe(0)
    })
  })
  describe('with invalid', () => {
    describe('nbf', () => {
      it('should return error if nbf too low', async () => {
        const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(-1, true), asXL1BlockNumber(1000, true))
        const errors = await TransactionDurationValidator(context, hydratedTransaction)
        expect(errors.length).toBeGreaterThan(0)
      })
    })
    describe('exp', () => {
      it('should return error if exp less than nbf', async () => {
        const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(1, true), asXL1BlockNumber(0, true))
        const errors = await TransactionDurationValidator(context, hydratedTransaction)
        expect(errors.length).toBeGreaterThan(0)
      })
      it('should return error if exp is equal to nbf', async () => {
        const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(0, true))
        const errors = await TransactionDurationValidator(context, hydratedTransaction)
        expect(errors.length).toBeGreaterThan(0)
      })
      it('should return error if exp too high', async () => {
        const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
        const errors = await TransactionDurationValidator(context, hydratedTransaction)
        expect(errors.length).toBeGreaterThan(0)
      })
      it('should return error if exp is negative', async () => {
        const hydratedTransaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(-1, true))
        const errors = await TransactionDurationValidator(context, hydratedTransaction)
        expect(errors.length).toBeGreaterThan(0)
      })
    })
  })

  describe('with invalid tx and no _hash (ZERO_HASH coverage)', () => {
    it('should use ZERO_HASH when nbf < 0 and _hash is undefined', async () => {
      const tx = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(-1, true), asXL1BlockNumber(0, true))
      ;(tx[0] as Record<string, unknown>)._hash = undefined
      const errors = await TransactionDurationValidator(context, tx)
      expect(errors.length).toBeGreaterThan(0)
    })
    it('should use ZERO_HASH when exp < 0 and _hash is undefined', async () => {
      const tx = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(-1, true))
      ;(tx[0] as Record<string, unknown>)._hash = undefined
      const errors = await TransactionDurationValidator(context, tx)
      expect(errors.length).toBeGreaterThan(0)
    })
    it('should use ZERO_HASH when exp too high and _hash is undefined', async () => {
      const tx = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
      ;(tx[0] as Record<string, unknown>)._hash = undefined
      const errors = await TransactionDurationValidator(context, tx)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with malformed transaction', () => {
    it('should return a validation excepted error', async () => {
      const malformed = null as unknown as SignedHydratedTransactionWithHashMeta
      const errors = await TransactionDurationValidator(context, malformed)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toContain('Failed TransactionDurationValidator')
    })
  })
})
