import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'
import { buildJsonRpcProviderLocator } from '@xyo-network/xl1-providers'
import type { RpcSchemaMap, TransportFactory } from '@xyo-network/xl1-rpc'
import { HttpRpcTransport } from '@xyo-network/xl1-rpc'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { type BlockViewer, BlockViewerMoniker } from '../../../../viewers/index.ts'
import { calculateStepSizeRate } from '../stepRate.ts'

// ideally this would call to mainnet or sequence to get finalized blocks that won't change
// that can happen once sdk 1.18.x is released with the new rpc changes
// and we can update the block ranges to something static for all time
const endpoint = 'http://localhost:8080/rpc'

describe('calculateStepSizeRate', () => {
  let viewer: BlockViewer

  beforeEach(async () => {
    const transportFactory: TransportFactory = (schemas: RpcSchemaMap) => new HttpRpcTransport(endpoint, schemas)
    const locator = await buildJsonRpcProviderLocator({ transportFactory })
    viewer = await locator.getInstance<BlockViewer>(BlockViewerMoniker)
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
