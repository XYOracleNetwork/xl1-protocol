import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { BlockViewer } from '@xyo-network/xl1-protocol'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { getEmptyContext } from '../../../context/index.ts'
import type { CreatableProviderContext } from '../../../CreatableProvider/index.ts'
import { SimpleBlockViewer } from '../../../simple/index.ts'
import { getWindowedChain } from '../getWindowedChain.ts'

describe('getWindowedChain', () => {
  let finalizedArchivist: ArchivistInstance
  let blockViewer: BlockViewer
  let context: CreatableProviderContext

  beforeEach(async () => {
    context = getEmptyContext()
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
