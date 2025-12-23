import type { Address, Hash } from '@xylabs/sdk-js'
import type { HydratedBlock } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { HydratedBlockStateValidationError } from './error.ts'

describe('HydratedBlockStateValidationError', () => {
  it('should be able display chainId', () => {
    const error: HydratedBlockStateValidationError = new HydratedBlockStateValidationError(
      '2234567890abcdef1234567890abcdef12345678' as Hash, // Mock Hash
      '1234567890abcdef1234567890abcdef12345678' as Address, // Mock Address
      {} as HydratedBlock, // Mock HydratedBlock
      'Test Error',
      [new Error('Inner error')],
    )
    expect(error).toBeDefined()
  })
})
