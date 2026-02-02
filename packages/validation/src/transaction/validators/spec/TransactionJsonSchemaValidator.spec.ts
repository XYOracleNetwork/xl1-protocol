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
})
