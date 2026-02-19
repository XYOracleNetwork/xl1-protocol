import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { ArchivistInstance } from '@xyo-network/sdk-js'
import type { BlockViewer } from '@xyo-network/xl1-protocol'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { ConfigZod } from '../../../config/index.ts'
import { type CreatableProviderContext } from '../../../model/index.ts'
import { SimpleBlockViewer } from '../../../simple/index.ts'
import { getTestProviderContext } from '../../../test/index.ts'
import { getWindowedChain } from '../getWindowedChain.ts'

describe('getWindowedChain', () => {
  let finalizedArchivist: ArchivistInstance
  let blockViewer: BlockViewer
  let context: CreatableProviderContext

  beforeEach(async () => {
    context = getTestProviderContext(ConfigZod.parse({}))
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
