import type { Address } from '@xylabs/sdk-js'
import { asAddress, spanRootAsync } from '@xylabs/sdk-js'
import { asBlockBoundWitnessWithStorageMeta, asXL1BlockRange } from '@xyo-network/xl1-protocol'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import {
  type ChainQualified, type ChainQualifiedConfig, isChainQualifiedHeadConfig,
  isChainQualifiedRangeConfig,
} from '../../../model/index.ts'
import { parseSignedBigInt } from '../../../SignedBigInt.ts'
import type { BalanceStepSummaryContext } from '../../model/index.ts'
import { balancesStepSummaryFromRange } from './balancesStepSummaryFromRange.ts'

export async function balancesSummary(
  context: BalanceStepSummaryContext,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Address, bigint>>> {
  return await spanRootAsync('balancesSummary', async () => {
    const [headHash] = isChainQualifiedHeadConfig(config) ? [config.head] : await context.head()
    const headResult = await context.store.chainMap.get(headHash)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(headResult, () => `Head block not found for hash: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'balancesSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => balancesStepSummaryFromRange(context, range)))
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
