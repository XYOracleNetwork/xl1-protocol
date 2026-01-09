import '@xylabs/vitest-extended'

import { MemoryArchivist } from '@xyo-network/archivist-memory'
import { SimpleMempoolViewer } from '@xyo-network/xl1-protocol-sdk'
import { buildProviderLocator } from '@xyo-network/xl1-providers'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

describe.skip('SimpleMempoolViewer', () => {
  let sut: SimpleMempoolViewer
  let pendingBlocksArchivist: MemoryArchivist
  let pendingTransactionsArchivist: MemoryArchivist

  beforeAll(async () => {
    pendingBlocksArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingTransactionsArchivist = await MemoryArchivist.create({ account: 'random' })
    const locator = buildProviderLocator()
    sut = await SimpleMempoolViewer.create({
      pendingBlocksArchivist,
      pendingTransactionsArchivist,
    })
  })

  beforeEach(async () => {
    await pendingBlocksArchivist.clear()
    await pendingTransactionsArchivist.clear()
  })

  describe('pendingTransactions', () => {
    it('returns pending transactions', async () => {
      const pendingTransactions = await sut.pendingTransactions()
      expect(pendingTransactions).toBeArrayOfSize(1)
    })
  })
})
