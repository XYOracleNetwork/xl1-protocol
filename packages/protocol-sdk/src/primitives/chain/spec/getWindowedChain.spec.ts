import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { getDefaultConfig } from '../../../config/index.ts'
import type { CreatableProviderContext } from '../../../CreatableProvider/index.ts'
import { ProviderFactoryLocator } from '../../../CreatableProvider/index.ts'
import type { BlockViewer } from '../../../model/index.ts'
import { SimpleBlockViewer } from '../../../simple/index.ts'
import { getWindowedChain } from '../getWindowedChain.ts'

function getTestContext(): CreatableProviderContext {
  const config = getDefaultConfig()
  const singletons = {}
  const caches = {}
  const locator = new ProviderFactoryLocator({
    config, singletons, caches,
  })
  return locator.context
}

describe('getWindowedChain', () => {
  let finalizedArchivist: ArchivistInstance
  let blockViewer: BlockViewer
  let context: CreatableProviderContext

  beforeEach(async () => {
    context = getTestContext()
    finalizedArchivist = await MemoryArchivist.create({ account: 'random', config: { name: 'FinalizedArchivist' } })
    blockViewer = await SimpleBlockViewer.create({
      finalizedArchivist,
      context,
    })
  })

  it.skip('returns an empty array when there are no blocks', async () => {
    const chain = await getWindowedChain(context, blockViewer, 5)
    expect(chain).toEqual([])
  })
})
