import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  HydratedTransactionValidationFunctionContext,
  HydratedTransactionWithHashMeta,
  SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  describe, expect, it,
} from 'vitest'

import { validateTransaction } from '../validateTransaction.ts'

describe('validateTransaction', () => {
  const chainId = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  const context: HydratedTransactionValidationFunctionContext = {
    chainId,
    singletons: {},
    caches: {},
  }

  describe('with valid transaction', () => {
    it('should return no errors for a well-formed transaction', async () => {
      const signer = await Account.random()
      const tx = await buildRandomTransaction(chainId, [], signer)
      const errors = await validateTransaction(context, tx)
      expect(errors).toEqual([])
    })
  })

  describe('with non-transaction BoundWitness', () => {
    it('should return an error when tx[0] is not a TransactionBoundWitness', async () => {
      // A BoundWitness without transaction fields fails isTransactionBoundWitness
      const fakeTx = [{
        schema: 'network.xyo.boundwitness', $signatures: [], addresses: [], payload_hashes: [], payload_schemas: [], previous_hashes: [],
      }, []] as unknown as HydratedTransactionWithHashMeta
      const errors = await validateTransaction(context, fakeTx)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('failed isTransactionBoundWitness identity check')
    })
  })

  describe('with additionalValidators', () => {
    it('should run additional validators', async () => {
      const signer = await Account.random()
      const tx = await buildRandomTransaction(chainId, [], signer)
      const customError = new Error('custom validator error')
      const customValidator = () => [customError as unknown as never]
      const errors = await validateTransaction(context, tx, [customValidator])
      expect(errors.includes(customError)).toBe(true)
    })
  })

  describe('with malformed transaction', () => {
    it('should return a catch block error when tx access throws', async () => {
      const malformed = null as unknown as SignedHydratedTransactionWithHashMeta
      const errors = await validateTransaction(context, malformed)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toContain('Failed TransactionGasValidator')
    })
  })
})
