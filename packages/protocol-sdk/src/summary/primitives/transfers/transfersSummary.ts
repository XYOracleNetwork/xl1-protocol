import type { Address, Hash } from '@xylabs/sdk-js'
import { asAddress, spanRootAsync } from '@xylabs/sdk-js'
import { asBlockBoundWitnessWithStorageMeta, asXL1BlockRange } from '@xyo-network/xl1-protocol'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import type { ChainQualified, ChainQualifiedConfig } from '../../../model/index.ts'
import { isChainQualifiedHeadConfig, isChainQualifiedRangeConfig } from '../../../model/index.ts'
import { parseSignedBigInt } from '../../../SignedBigInt.ts'
import type { TransfersStepSummaryContext } from '../../model/index.ts'
import { transfersStepSummaryFromRange } from './transfersStepSummaryFromRange.ts'

// the summary of amount of rewards claimed from the step reward pool by addresses
export async function transfersSummary(
  context: TransfersStepSummaryContext,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Address, Record<Address, bigint>>>> {
  return await spanRootAsync('transferSummary', async () => {
    const [headHash] = isChainQualifiedHeadConfig(config) ? [config.head] : await context.head()
    const headResult = await context.store.chainMap.get(headHash)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(headResult, () => `Head block not found for hash: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'transfersSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => transfersStepSummaryFromRange(context, range)))
    const transfers: Record<Address, Record<Address, bigint>> = {}
    for (let summary of summaries) {
      for (const [from, toMap] of Object.entries(summary.transfers)) {
        const validFrom = asAddress(from, () => `Invalid address: ${from}`)
        transfers[validFrom] = transfers[validFrom] ?? {}
        for (const [to, transfer] of Object.entries(toMap)) {
          const validTo = asAddress(to, () => `Invalid address: ${to}`)
          transfers[validFrom][validTo] = (transfers[validFrom][validTo] ?? 0n) + parseSignedBigInt(transfer)
        }
      }
    }
    return [transfers, { range, head: headHash }]
  }, { timeBudgetLimit: 500 })
}

export function transfersSummaryKey(frameHeadHash: Hash, frameSize: number) {
  return `${frameHeadHash}|${frameSize}`
}
