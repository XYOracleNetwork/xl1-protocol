import { asXL1BlockRange } from '@xyo-network/xl1-protocol'
import { buildJsonRpcProviderLocator } from '@xyo-network/xl1-providers'
import type { RpcSchemaMap, TransportFactory } from '@xyo-network/xl1-rpc'
import { HttpRpcTransport } from '@xyo-network/xl1-rpc'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { type BlockViewer, BlockViewerMoniker } from '../../../../viewers/index.ts'
import { calculateBlockRate } from '../blockRate.ts'

// ideally this would call to mainnet or sequence to get finalized blocks that won't change
// that can happen once sdk 1.18.x is released with the new rpc changes
// and we can update the block ranges to something static for all time
const endpoint = 'http://localhost:8080/rpc'

describe('calculateBlocksRate', () => {
  let viewer: BlockViewer

  beforeEach(async () => {
    const transportFactory: TransportFactory = (schemas: RpcSchemaMap) => new HttpRpcTransport(endpoint, schemas)
    const locator = await buildJsonRpcProviderLocator({ transportFactory })
    viewer = await locator.getInstance<BlockViewer>(BlockViewerMoniker)
  })

  it('should calculate the block rate between two blocks', async () => {
    const range = asXL1BlockRange([140_836, 140_838], true)
    const result = await calculateBlockRate(viewer, range)
    // console.log('Block Rate Result:', result)

    expect(result.range, 'Range should match input').toEqual(range)
    expect(result.span, 'Span should be 2').toBe(2)
    expect(result.rate, 'Rate should be 1/34016 block/ms').toBeCloseTo(0.000_029_397_930_385_700_848)
    expect(result.timeDifference, 'Time difference should be 68,032 ms').toBe(68_032)
  })

  it('should format block rate in different time units', async () => {
    const range = asXL1BlockRange([140_836, 140_838], true)
    const result = await calculateBlockRate(viewer, range, 'hours')
    // console.log('Block Rate Result in Hours:', result)

    expect(result.range, 'Range should match input').toEqual(range)
    expect(result.span, 'Span should be 2').toBeCloseTo(2)
    expect(result.rate, 'Rate should be 105.83254938852305 blocks per hour').toBe(105.832_549_388_523_05)
    expect(result.timeDifference, 'Time difference should be ~0.0189 hours').toBeCloseTo(0.018_899_722_222_222_222)
  })

  it('should throw an error if end block is less than or equal to start block', async () => {
    const range = asXL1BlockRange([140_840, 140_831], true)
    await expect(calculateBlockRate(viewer, range)).rejects.toThrow(
      'End block height must be greater than start block height',
    )
  })
})
