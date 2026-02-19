import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import { asXL1BlockNumber, type SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { buildRandomTransaction, buildTransaction } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { TransactionElevationValidator } from '../TransactionElevationValidator.ts'

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
  describe('should return no errors', () => {
    it('if all script hash payloads are supplied', async () => {
      const tx = await buildRandomTransaction(chainId, [], signer)
      const result = await TransactionElevationValidator(context, tx)
      expect(result.length).toBe(0)
    })
    it('when no payloads referenced in script hash', async () => {
      const sample = await buildRandomTransaction(chainId, [], signer)
      const tx = await buildTransaction(chainId, [], sample[1], signer, asXL1BlockNumber(1, true), asXL1BlockNumber(2, true))
      const result = await TransactionElevationValidator(context, tx)
      expect(result.length).toBe(0)
    })
  })
  describe('should return errors', () => {
    it('if not all script hash payloads are supplied', async () => {
      const [bw] = await buildRandomTransaction(chainId, [], signer)
      const tx = [bw, []] as SignedHydratedTransactionWithHashMeta
      const result = await TransactionElevationValidator(context, tx)
      expect(result.length).toBe(1)
    })
  })
})
