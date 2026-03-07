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

    it('should use ZERO_HASH when tx[0]._hash is undefined and elevation fails', async () => {
      const [bw] = await buildRandomTransaction(chainId, [], signer)
      ;(bw as Record<string, unknown>)._hash = undefined
      const tx = [bw, []] as SignedHydratedTransactionWithHashMeta
      const result = await TransactionElevationValidator(context, tx)
      expect(result.length).toBe(1)
    })

    it('should return a Failed TransactionElevationValidator error when inner catch handler throws', async () => {
      // Make the iterator throw so extractElevatedHashes fails (triggers inner catch).
      // Then make tx[0] (property access) throw on the first access inside the inner catch
      // handler, causing the outer catch to fire.
      let propertyAccessCount = 0
      const throwingTx = new Proxy([] as unknown[], {
        get(_target, key) {
          if (key === Symbol.iterator) {
            return function* () {
              throw new Error('iterator unavailable')
            }
          }
          if (key === '0') {
            propertyAccessCount++
            if (propertyAccessCount === 1) throw new Error('tx[0] unavailable')
            return
          }
          return (_target as unknown as Record<string | symbol, unknown>)[key as string]
        },
      }) as unknown as SignedHydratedTransactionWithHashMeta

      const result = await TransactionElevationValidator(context, throwingTx)
      expect(result.length).toBe(1)
      expect(result[0].message).toContain('Failed TransactionElevationValidator')
    })
  })
})
