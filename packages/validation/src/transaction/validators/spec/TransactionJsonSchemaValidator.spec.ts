import type { Address } from '@xylabs/sdk-js'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { TransactionJsonSchemaValidator } from '../TransactionJsonSchemaValidator.ts'

describe('TransactionJsonSchemaValidator', () => {
  const chain = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address

  describe('with valid transaction', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      hydratedTransaction = await buildRandomTransaction(chain)
    })
    it('should return no errors', async () => {
      const errors = await TransactionJsonSchemaValidator(hydratedTransaction, chain)
      expect(errors).toEqual([])
    })
  })
  describe('with invalid transaction', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      hydratedTransaction = await buildRandomTransaction(chain)
      hydratedTransaction[0].chain = 'invalid' as Address // intentionally invalid chain
    })
    it('should return error', async () => {
      const errors = await TransactionJsonSchemaValidator(hydratedTransaction, chain)
      expect(errors.length).toBeGreaterThan(0)
    })
  })
})
