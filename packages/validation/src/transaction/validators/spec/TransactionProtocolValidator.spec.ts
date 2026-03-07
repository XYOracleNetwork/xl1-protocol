import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  ChainId,
  HydratedTransactionValidationFunctionContext,
  SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { TransactionProtocolValidator } from '../TransactionProtocolValidator.ts'

describe('TransactionProtocolValidator', () => {
  const chainId = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  const context: HydratedTransactionValidationFunctionContext = {
    chainId,
    singletons: {},
    caches: {},
  }
  const contextWithoutChainId: Omit<HydratedTransactionValidationFunctionContext, 'chainId'> = { singletons: {} }

  let transaction: SignedHydratedTransactionWithHashMeta

  beforeEach(async () => {
    transaction = await buildRandomTransaction(chainId)
  })

  describe('with no chainId in context', () => {
    it('should return no errors', async () => {
      const result = await TransactionProtocolValidator(contextWithoutChainId as HydratedTransactionValidationFunctionContext, transaction)
      expect(result).toEqual([])
    })
  })

  describe('with matching chainId', () => {
    it('should return no errors when tx chain matches context chainId', async () => {
      const result = await TransactionProtocolValidator(context, transaction)
      expect(result).toEqual([])
    })
  })

  describe('with mismatched chainId', () => {
    it('should return an error when tx chain does not match context chainId', async () => {
      const otherChainId: ChainId = (await Account.random()).address
      const txOnOtherChain = await buildRandomTransaction(otherChainId)
      const result = await TransactionProtocolValidator(context, txOnOtherChain)
      expect(result.length).toBe(1)
    })

    it('should include the expected chain ids in the error message', async () => {
      const otherChainId: ChainId = (await Account.random()).address
      const txOnOtherChain = await buildRandomTransaction(otherChainId)
      const result = await TransactionProtocolValidator(context, txOnOtherChain)
      expect(result[0].message).toBe(`invalid chain id [${chainId}, ${otherChainId}]`)
    })
  })

  describe('with mismatched chainId and no _hash', () => {
    it('should use ZERO_HASH when tx[0]._hash is undefined', async () => {
      const fakeTx = [{ chain: (await Account.random()).address, $signatures: [] }, []] as unknown as SignedHydratedTransactionWithHashMeta
      const result = await TransactionProtocolValidator(context, fakeTx)
      expect(result.length).toBe(1)
    })
  })

  describe('with malformed transaction', () => {
    it('should return a validation excepted error', async () => {
      const malformed = null as unknown as SignedHydratedTransactionWithHashMeta
      const result = await TransactionProtocolValidator(context, malformed)
      expect(result.length).toBe(1)
      expect(result[0].message).toBe('validation excepted')
    })
  })
})
