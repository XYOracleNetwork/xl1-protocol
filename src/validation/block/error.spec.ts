import {
  describe, expect, it,
} from 'vitest'

import type { HydratedBlock } from '../../block/index.ts'
import { HydratedBlockStateValidationError } from './error.ts'

describe('HydratedBlockStateValidationError', () => {
  it('should be able display chainId', () => {
    const error: HydratedBlockStateValidationError = new HydratedBlockStateValidationError('kdsjfhs', {} as HydratedBlock, 'Test Error')
    console.log('error', error)

    expect(error).toBeDefined()
  })
})
