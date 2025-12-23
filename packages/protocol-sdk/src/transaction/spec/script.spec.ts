import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { AccountInstance } from '@xyo-network/account-model'
import type { HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { buildRandomTransaction } from '../buildRandomTransaction.ts'
import { extractElevatedHashes, tryExtractElevatedHashes } from '../script.ts'

describe('script', () => {
  const chain = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  let signer: AccountInstance
  beforeAll(async () => {
    signer = await Account.random()
  })
  describe('extractElevatedHashes', () => {
    it('should extract elevated hashes from a valid transaction', async () => {
      const tx = await buildRandomTransaction(chain, [], signer)
      const hashes = extractElevatedHashes(tx)
      expect(hashes.length).toBeGreaterThan(0)
    })

    it('should throw an error when extracting elevated hashes from an invalid transaction', async () => {
      const tx = await buildRandomTransaction(chain, [], signer)
      const [bw] = tx
      const invalidTransaction = [bw, []] as HydratedTransactionWithHashMeta
      expect(() => extractElevatedHashes(invalidTransaction)).toThrow()
    })
  })
  describe('tryExtractElevatedHashes', () => {
    it('should extract elevated hashes from a valid transaction', async () => {
      const tx = await buildRandomTransaction(chain, [], signer)
      const hashes = tryExtractElevatedHashes(tx)
      expect(hashes.length).toBeGreaterThan(0)
    })

    it('should not throw an error when extracting elevated hashes from an invalid transaction', async () => {
      const tx = await buildRandomTransaction(chain, [], signer)
      const [bw] = tx
      const invalidTransaction = [bw, []] as HydratedTransactionWithHashMeta
      const hashes = await tryExtractElevatedHashes(invalidTransaction)
      expect(hashes.length).toBe(0)
    })
  })
})
