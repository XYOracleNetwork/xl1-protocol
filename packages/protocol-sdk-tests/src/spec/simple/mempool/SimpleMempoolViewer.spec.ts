import '@xylabs/vitest-extended'

import { MemoryArchivist } from '@xyo-network/archivist-memory'
import { SimpleMempoolViewer } from '@xyo-network/xl1-protocol-sdk'
import { buildSimpleProviderLocator } from '@xyo-network/xl1-providers'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

describe.skip('SimpleMempoolViewer', () => {
  async function buildSimpleMempoolViewer(pendingBlocksArchivist: MemoryArchivist, pendingTransactionsArchivist: MemoryArchivist) {
    const locator = buildSimpleProviderLocator()
    locator.register(
      SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingBlocksArchivist, pendingTransactionsArchivist }),
    )
    return await locator.getInstance<SimpleMempoolViewer>(SimpleMempoolViewer.defaultMoniker)
  }

  let sut: SimpleMempoolViewer
  let pendingBlocksArchivist: MemoryArchivist
  let pendingTransactionsArchivist: MemoryArchivist

  beforeAll(async () => {
    pendingBlocksArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingTransactionsArchivist = await MemoryArchivist.create({ account: 'random' })
    sut = await buildSimpleMempoolViewer(pendingBlocksArchivist, pendingTransactionsArchivist)
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
