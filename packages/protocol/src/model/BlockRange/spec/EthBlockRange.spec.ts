import {
  describe, expect, it,
} from 'vitest'

import { asEthBlockNumber } from '../../../BlockNumber/index.ts'
import type { EthBlockRange } from '../EthBlockRange.ts'
import { toEthBlockNumberKey } from '../EthBlockRange.ts'

describe('EthBlockRange key serialization', () => {
  describe('toEthBlockNumberKey', () => {
    it('should serialize a range to a pipe-separated key', () => {
      const range: EthBlockRange = [asEthBlockNumber(0, true), asEthBlockNumber(100, true)]
      const key = toEthBlockNumberKey(range)
      expect(key).toBe('0|100')
    })

    it('should handle large block numbers', () => {
      const range: EthBlockRange = [asEthBlockNumber(18_000_000, true), asEthBlockNumber(18_000_100, true)]
      const key = toEthBlockNumberKey(range)
      expect(key).toBe('18000000|18000100')
    })
  })
})
