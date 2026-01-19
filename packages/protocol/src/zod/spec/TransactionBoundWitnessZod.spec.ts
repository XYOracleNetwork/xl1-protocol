import {
  describe, expect, it,
} from 'vitest'

import { isSignedHydratedTransactionWithHashMeta } from '../HydratedTransaction.ts'
import { signedHydratedTransactionWithHashMeta, unsignedHydratedTransactionWithHashMeta } from './fixtures/index.ts'

describe('HydratedTransaction', () => {
  it('should catch invalid SignedHydratedTransactionWithHashMeta', () => {
    expect(isSignedHydratedTransactionWithHashMeta(unsignedHydratedTransactionWithHashMeta)).toBe(false)
  })
  it('should validate SignedHydratedTransactionWithHashMeta', () => {
    expect(isSignedHydratedTransactionWithHashMeta(signedHydratedTransactionWithHashMeta)).toBe(true)
  })
})
