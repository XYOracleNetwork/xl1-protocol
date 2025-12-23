import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { AccountInstance } from '@xyo-network/account-model'
import type { Signed } from '@xyo-network/boundwitness-model'
import type {
  SignedHydratedTransactionWithHashMeta,
  TransactionBoundWitnessWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import { buildTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll,
  beforeEach,
  describe, expect, it,
} from 'vitest'

import { TransactionFromValidator } from '../TransactionFromValidator.ts'

describe('TransactionFromValidator', () => {
  const chain = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  let signer: AccountInstance
  beforeAll(async () => {
    signer = await Account.random()
  })
  describe('with from empty', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      const transaction = await buildTransaction(chain, [], [], signer, asXL1BlockNumber(0, true), asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true))
      const { from, ...tx } = transaction[0]
      hydratedTransaction = [tx as Signed<TransactionBoundWitnessWithHashMeta>, transaction[1]]
    })
    it('should return error', async () => {
      const errors = await TransactionFromValidator(hydratedTransaction, chain)
      expect(errors.length).toBeGreaterThan(0)
    })
  })
  describe('with from not in addresses', () => {
    let hydratedTransaction: SignedHydratedTransactionWithHashMeta
    beforeEach(async () => {
      const from = await Account.random()
      hydratedTransaction = await buildTransaction(
        chain,
        [],
        [],
        signer,
        asXL1BlockNumber(0, true),
        asXL1BlockNumber(Number.MAX_SAFE_INTEGER, true),
        from.address,
      )
    })
    it('should return error', async () => {
      const errors = await TransactionFromValidator(hydratedTransaction, chain)
      expect(errors.length).toBeGreaterThan(0)
    })
  })
})
