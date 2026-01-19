import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { getDefaultConfig } from '../../../config/index.ts'
import { ProviderFactoryLocator } from '../../../CreatableProvider/index.ts'
import { SimpleBlockViewer } from '../../../simple/index.ts'
import type { BlockViewer } from '../../../viewers/index.ts'
import { getWindowedChain } from '../getWindowedChain.ts'
describe('getWindowedChain', () => {
  let finalizedArchivist: ArchivistInstance
  let blockViewer: BlockViewer

  beforeEach(async () => {
    const config = getDefaultConfig()
    const singletons = {}
    const caches = {}
    const locator = new ProviderFactoryLocator({
      config, singletons, caches,
    })
    finalizedArchivist = await MemoryArchivist.create({ account: 'random', config: { name: 'FinalizedArchivist' } })
    blockViewer = await SimpleBlockViewer.create({
      finalizedArchivist,
      context: {
        config, locator, singletons, caches,
      },
    })
  })

  it.skip('returns an empty array when there are no blocks', async () => {
    const chain = await getWindowedChain(blockViewer, 5)
    expect(chain).toEqual([])
  })
})
