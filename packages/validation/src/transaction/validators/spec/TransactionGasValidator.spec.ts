import { hexFromBigInt } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  ChainId,
  HydratedTransactionValidationFunctionContext,
  SignedHydratedTransactionWithHashMeta,
  TransactionBoundWitness, TransactionFeesHex,
} from '@xyo-network/xl1-protocol'
import { buildRandomTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

import { TransactionGasValidator } from '../TransactionGasValidator.ts'

describe('TransactionGasValidator', () => {
  let chainId: ChainId
  let context: HydratedTransactionValidationFunctionContext
  let transaction: SignedHydratedTransactionWithHashMeta

  beforeAll(async () => {
    chainId = (await Account.random()).address
    context = {
      chainId,
      singletons: {},
      caches: {},
    }
  })

  beforeEach(async () => {
    transaction = await buildRandomTransaction(chainId)
  })

  describe('with valid transaction', () => {
    it('should return no errors for valid fees', async () => {
      const result = await TransactionGasValidator(context, transaction)
      expect(result).toEqual([])
    })
  })

  describe('with invalid transaction', () => {
    describe('fees', () => {
      it('should return an error if fees are missing', async () => {
        delete (transaction[0] as Partial<TransactionBoundWitness>).fees
        const result = await TransactionGasValidator(context, transaction)
        expect(result[0].message).toEqual('Missing fees')
      })
    })

    describe('base', () => {
      it('should return an error if fees.base is undefined', async () => {
        delete (transaction[0].fees as Partial<TransactionFeesHex>)?.base
        const result = await TransactionGasValidator(context, transaction)
        expect(result[0].message).toEqual('fees.base must be defined and a valid number')
      })
      it('should return an error if fees.base is less than or equal to 0', async () => {
        transaction[0].fees.base = hexFromBigInt(0n)
        const result = await TransactionGasValidator(context, transaction)
        expect(result.length).toEqual(1)
      })
    })

    describe('gasLimit', () => {
      it('should return an error if fees.gasLimit is undefined', async () => {
        delete (transaction[0].fees as Partial<TransactionFeesHex>)?.gasLimit
        const result = await TransactionGasValidator(context, transaction)
        expect(result[0].message).toEqual('fees.gasLimit must be defined and a valid number')
      })
      it('should return an error if fees.gasLimit is less than or equal to 0', async () => {
        transaction[0].fees.gasLimit = hexFromBigInt(0n)
        const result = await TransactionGasValidator(context, transaction)
        expect(result.length).toEqual(1)
      })
    })
  })

  describe('gasPrice', () => {
    it('should return an error if fees.gasPrice is undefined', async () => {
      delete (transaction[0].fees as Partial<TransactionFeesHex>)?.gasPrice
      const result = await TransactionGasValidator(context, transaction)
      expect(result[0].message).toEqual('fees.gasPrice must be defined and a valid number')
    })
    it('should return an error if fees.gasPrice is less than or equal to 0', async () => {
      transaction[0].fees.gasPrice = hexFromBigInt(0n)
      const result = await TransactionGasValidator(context, transaction)
      expect(result.length).toEqual(1)
    })
  })

  describe('priority', () => {
    it('should return an error if fees.priority is undefined', async () => {
      delete (transaction[0].fees as Partial<TransactionFeesHex>)?.priority
      const result = await TransactionGasValidator(context, transaction)
      expect(result[0].message).toEqual('fees.priority must be defined and a valid number')
    })
  })
})
