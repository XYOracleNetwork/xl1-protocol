import type { Address } from '@xylabs/sdk-js'
import {
  asAddress, assertEx, spanRootAsync,
} from '@xylabs/sdk-js'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  BlockViewer,
  CachingContext, ChainQualified, ChainQualifiedConfig,
  MapType,
} from '@xyo-network/xl1-protocol'
import {
  asBlockBoundWitnessWithStorageMeta, asXL1BlockRange, isChainQualifiedHeadConfig,
  isChainQualifiedRangeConfig,
} from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { parseSignedBigInt } from '../../../SignedBigInt.ts'
import type { BalancesStepSummary } from '../../model/index.ts'
import { balancesStepSummaryFromRange } from './balancesStepSummaryFromRange.ts'

export async function balancesSummary(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Address, bigint>>> {
  return await spanRootAsync('balancesSummary', async () => {
    const headHash = isChainQualifiedHeadConfig(config) ? config.head : await blockViewer.currentBlockHash()
    const [head] = assertEx(await blockViewer.blockByHash(headHash), () => `Block not found for hash: ${headHash}`)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(head, () => `Found Block not a BlockWithHashMeta: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'balancesSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => balancesStepSummaryFromRange(context, semaphores, blockViewer, summaryMap, range)))
    const balances: Record<Address, bigint> = {}
    for (let summary of summaries) {
      for (const [address, balance] of Object.entries(summary.balances)) {
        const validAddress = asAddress(address, () => `Invalid address: ${address}`)
        balances[validAddress] = (balances[validAddress] ?? 0n) + parseSignedBigInt(balance)
      }
    }
    return [balances, { range, head: headHash }]
  }, context)
}
