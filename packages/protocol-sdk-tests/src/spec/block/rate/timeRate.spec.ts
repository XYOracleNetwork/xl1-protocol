import type { BlockViewer, SingleTimeConfig } from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, BlockViewerMoniker } from '@xyo-network/xl1-protocol'
import {
  calculateTimeRate, DEFAULT_TOLERANCE_MS, rateMultipliers,
} from '@xyo-network/xl1-protocol-sdk'
import { buildJsonRpcProviderLocator } from '@xyo-network/xl1-providers'
import type { RpcSchemaMap, TransportFactory } from '@xyo-network/xl1-rpc'
import { HttpRpcTransport } from '@xyo-network/xl1-rpc'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { SkipRateSpecs } from './Config.ts'

// ideally this would call to mainnet or sequence to get finalized blocks that won't change
// that can happen once sdk 1.18.x is released with the new rpc changes
// and we can update the block ranges to something static for all time
const endpoint = 'http://localhost:8080/rpc'

describe.skipIf(SkipRateSpecs)('calculateTimeRate', () => {
  let viewer: BlockViewer

  beforeEach(async () => {
    const transportFactory: TransportFactory = (schemas: RpcSchemaMap) => new HttpRpcTransport(endpoint, schemas)
    const locator = await buildJsonRpcProviderLocator({ transportFactory })
    viewer = await locator.getInstance<BlockViewer>(BlockViewerMoniker)
  })

  it('should calculate the block rate for a given time range', async () => {
    const startBlock = asXL1BlockNumber(100_000, true)
    const timeConfig: SingleTimeConfig = { days: 1 }

    const result = await calculateTimeRate(viewer, timeConfig, startBlock)
    console.log('Block Rate Result:', result)

    expect(result.range, 'Range should be start block minus ~1 day').toEqual([98_541, 100_000])
    expect(result.span, 'Span should be 1459').toBe(1459)
    expect(result.timeDifference, 'Time difference should be within tolerance')
      .toBeGreaterThanOrEqual(rateMultipliers.days - DEFAULT_TOLERANCE_MS) // 1 day in ms minus tolerance
    expect(result.timeDifference, 'Time difference should be within tolerance')
      .toBeLessThan(rateMultipliers.days + DEFAULT_TOLERANCE_MS) // 1 day in ms plus tolerance

    const timeConfig1: SingleTimeConfig = { hours: 1 }
    const result1 = await calculateTimeRate(viewer, timeConfig1, startBlock)
    console.log('Block Rate Result:', result1)

    expect(result1.range, 'Range should be start block minus ~1 hour').toEqual([99_942, 100_000])
    expect(result1.span, 'Span should be 58').toBe(58)
    expect(result1.timeDifference, 'Time difference should be within tolerance')
      .toBeGreaterThanOrEqual(rateMultipliers.hours - DEFAULT_TOLERANCE_MS) // 1 hour in ms minus tolerance
    expect(result1.timeDifference, 'Time difference should be within tolerance')
      .toBeLessThan(rateMultipliers.hours + DEFAULT_TOLERANCE_MS) // 1 hour in ms plus tolerance
  })
})
