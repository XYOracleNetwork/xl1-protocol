import '@xylabs/vitest-extended'

import { MemoryArchivist } from '@xyo-network/archivist-memory'
import {
  SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolViewer, SimpleWindowedBlockViewer,
} from '@xyo-network/xl1-protocol-sdk'
import { buildSimpleProviderLocator } from '@xyo-network/xl1-providers'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

describe('SimpleMempoolViewer', () => {
  async function buildSimpleMempoolViewer(
    finalizedArchivist: MemoryArchivist,
    pendingBlocksArchivist: MemoryArchivist,
    pendingTransactionsArchivist: MemoryArchivist,
  ) {
    const locator = buildSimpleProviderLocator()
    locator.registerMany([
      SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
      SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
      SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 1000, syncInterval: 10_000 }),
      SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingBlocksArchivist, pendingTransactionsArchivist }),
    ])
    return await locator.getInstance<SimpleMempoolViewer>(SimpleMempoolViewer.defaultMoniker)
  }

  let finalizedArchivist: MemoryArchivist
  let pendingBlocksArchivist: MemoryArchivist
  let pendingTransactionsArchivist: MemoryArchivist
  let sut: SimpleMempoolViewer

  beforeAll(async () => {
    finalizedArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingBlocksArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingTransactionsArchivist = await MemoryArchivist.create({ account: 'random' })
    sut = await buildSimpleMempoolViewer(finalizedArchivist, pendingBlocksArchivist, pendingTransactionsArchivist)
  })

  beforeEach(async () => {
    await finalizedArchivist.clear()
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
