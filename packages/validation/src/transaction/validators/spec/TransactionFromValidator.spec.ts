import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance, Signed } from '@xyo-network/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  SignedHydratedTransactionWithHashMeta,
  TransactionBoundWitnessWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import { buildRandomTransaction, buildTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll,
  beforeEach,
  describe, expect, it,
} from 'vitest'

import { TransactionFromValidator } from '../TransactionFromValidator.ts'

describe('TransactionFromValidator', () => {
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
  describe('with valid from', () => {
    it('should return no errors when from is a signer address', async () => {
      const hydratedTransaction = await buildRandomTransaction(chainId, [], signer)
      const errors = await TransactionFromValidator(context, hydratedTransaction)
      expect(errors.length).toBe(0)
    })
  })
  describe('with from empty', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      const transaction = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
      const { from, ...tx } = transaction[0]
      hydratedTransaction = [tx as Signed<TransactionBoundWitnessWithHashMeta>, transaction[1]]
    })
    it('should return error', async () => {
      const errors = await TransactionFromValidator(context, hydratedTransaction)
      expect(errors.length).toBeGreaterThan(0)
    })
  })
  describe('with from not in addresses', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      const from = await Account.random()
      hydratedTransaction = await buildTransaction(
        chainId,
        [],
        [],
        signer,
        asXL1BlockNumber(0, true),
        asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true),
        from.address,
      )
    })
    it('should return error', async () => {
      const errors = await TransactionFromValidator(context, hydratedTransaction)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with no _hash on tx[0]', () => {
    it('should use ZERO_HASH in error when from is missing and _hash is undefined', async () => {
      const tx = await buildTransaction(chainId, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
      const { from, ...rest } = tx[0]
      const txNoHash = [{ ...rest, _hash: undefined } as unknown as typeof tx[0], tx[1]] as SignedHydratedTransactionWithHashMeta
      const errors = await TransactionFromValidator(context, txNoHash)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with malformed transaction', () => {
    it('should return a validation excepted error', async () => {
      const malformed = null as unknown as SignedHydratedTransactionWithHashMeta
      const errors = await TransactionFromValidator(context, malformed)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toContain('Failed TransactionFromValidator')
    })
  })
})
