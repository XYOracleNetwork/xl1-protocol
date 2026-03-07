import type { Address } from '@xylabs/sdk-js'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { TransactionJsonSchemaValidator } from '../TransactionJsonSchemaValidator.ts'

describe('TransactionJsonSchemaValidator', () => {
  const chainId = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  const context = {
    chainId,
    singletons: {},
    caches: {},
  }

  describe('with valid transaction', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      hydratedTransaction = await buildRandomTransaction(chainId)
    })
    it('should return no errors', async () => {
      const errors = await TransactionJsonSchemaValidator(context, hydratedTransaction)
      expect(errors).toEqual([])
    })
  })
  describe('with invalid transaction', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      hydratedTransaction = await buildRandomTransaction(chainId)
      hydratedTransaction[0].chain = 'invalid' as Address // intentionally invalid chain
    })
    it('should return error', async () => {
      const errors = await TransactionJsonSchemaValidator(context, hydratedTransaction)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with invalid tx and no _hash', () => {
    it('should use ZERO_HASH in error when _hash is undefined and schema validation fails', async () => {
      const tx = await buildRandomTransaction(chainId)
      tx[0].chain = 'invalid' as Address
      ;(tx[0] as Record<string, unknown>)._hash = undefined
      const errors = await TransactionJsonSchemaValidator(context, tx)
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with malformed transaction', () => {
    it('should return a validation excepted error', async () => {
      const malformed = null as unknown as SignedHydratedTransactionWithHashMeta
      const errors = await TransactionJsonSchemaValidator(context, malformed)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('validation excepted')
    })
  })
})
