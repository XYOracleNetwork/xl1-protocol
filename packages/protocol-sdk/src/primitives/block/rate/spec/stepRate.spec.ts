import { MemoryArchivist } from '@xyo-network/archivist-memory'
import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { getDefaultConfig } from '../../../../config/index.ts'
import type { CreatableProviderRegistry } from '../../../../CreatableProvider/index.ts'
import { ProviderFactoryLocator } from '../../../../CreatableProvider/index.ts'
import { SimpleBlockViewer, SimpleFinalizationViewer } from '../../../../simple/index.ts'
import { type BlockViewer, FinalizationViewerMoniker } from '../../../../viewers/index.ts'
import { calculateStepSizeRate } from '../stepRate.ts'

describe.skipIf(true)('calculateStepSizeRate', () => {
  let viewer: BlockViewer

  beforeEach(async () => {
    const config = getDefaultConfig()
    const singletons = {}
    const finalizedArchivist = await MemoryArchivist.create({ account: 'random', config: { name: 'FinalizedArchivist' } })
    const simpleFinalizationViewerParams = { finalizedArchivist }
    const registry: CreatableProviderRegistry = {
      [FinalizationViewerMoniker]: [
        SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, simpleFinalizationViewerParams),
      ],
    }
    const locator = new ProviderFactoryLocator({ config, singletons }, registry)
    // TODO: Fix runtime error caused inability to get current block...presumably because the finalized archivist is empty
    viewer = await SimpleBlockViewer.create({
      finalizedArchivist,
      context: {
        config, locator, singletons,
      },
    })
  })

  it('should calculate the block rate for a given step', async () => {
    const startBlock = asXL1BlockNumber(100_000, true)
    const result = await calculateStepSizeRate(viewer, startBlock, 2, 1)
    // console.log('Step Size Rate Result:', result)

    expect(result.range, 'Range should match input').toEqual([startBlock, startBlock + StepSizes[2]])
    expect(result.span).toBe(StepSizes[2])
    expect(result.rate).toBeCloseTo(0.000_015_63)
    expect(result.timeDifference).toBe(13_491_184)
  })

  it('should throw an error if step index is invalid', async () => {
    const startBlock = asXL1BlockNumber(100_000, true)
    await expect(calculateStepSizeRate(viewer, startBlock, 10, 3)).rejects.toThrow(
      'Invalid step index: 10',
    )
  })
})
