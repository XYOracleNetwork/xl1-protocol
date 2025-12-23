import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { AccountInstance } from '@xyo-network/account-model'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import { buildTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { TransactionDurationValidator } from '../TransactionDurationValidator.ts'

describe('TransactionDurationValidator', () => {
  const chain = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  let signer: AccountInstance
  beforeAll(async () => {
    signer = await Account.random()
  })
  describe('with valid duration', () => {
    it('should return no errors', async () => {
      const hydratedTransaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(1000, true))
      const errors = await TransactionDurationValidator(hydratedTransaction, chain)
      expect(errors.length).toBe(0)
    })
  })
  describe('with invalid', () => {
    describe('nbf', () => {
      it('should return error if nbf too low', async () => {
        const hydratedTransaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(-1, true), asXL1BlockNumber(1000, true))
        const errors = await TransactionDurationValidator(hydratedTransaction, chain)
        expect(errors.length).toBeGreaterThan(0)
      })
    })
    describe('exp', () => {
      it('should return error if exp less than nbf', async () => {
        const hydratedTransaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(1, true), asXL1BlockNumber(0, true))
        const errors = await TransactionDurationValidator(hydratedTransaction, chain)
        expect(errors.length).toBeGreaterThan(0)
      })
      it('should return error if exp is equal to nbf', async () => {
        const hydratedTransaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(0, true))
        const errors = await TransactionDurationValidator(hydratedTransaction, chain)
        expect(errors.length).toBeGreaterThan(0)
      })
      it('should return error if exp too high', async () => {
        const hydratedTransaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
        const errors = await TransactionDurationValidator(hydratedTransaction, chain)
        expect(errors.length).toBeGreaterThan(0)
      })
    })
  })
})
