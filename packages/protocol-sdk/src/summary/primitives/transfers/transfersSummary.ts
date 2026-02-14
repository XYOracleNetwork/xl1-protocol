import type { Address } from '@xylabs/sdk-js'
import {
  asAddress, assertEx, spanRootAsync,
} from '@xylabs/sdk-js'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  BlockViewer, CachingContext, ChainQualified, ChainQualifiedConfig,
  MapType,
} from '@xyo-network/xl1-protocol'
import {
  asBlockBoundWitnessWithStorageMeta, asXL1BlockRange, isChainQualifiedHeadConfig,
  isChainQualifiedRangeConfig,
} from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { parseSignedBigInt } from '../../../SignedBigInt.ts'
import type { TransfersStepSummary } from '../../model/index.ts'
import { transfersStepSummaryFromRange } from './transfersStepSummaryFromRange.ts'

// the summary of amount of rewards claimed from the step reward pool by addresses
export async function transfersSummary(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Address, Record<Address, bigint>>>> {
  return await spanRootAsync('transferSummary', async () => {
    const headHash = isChainQualifiedHeadConfig(config) ? config.head : await blockViewer.currentBlockHash()
    const [head] = assertEx(await blockViewer.blockByHash(headHash), () => `Block not found for hash: ${headHash}`)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(head, () => `Found Block not a BlockWithHashMeta: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'transfersSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => transfersStepSummaryFromRange(context, semaphores, blockViewer, summaryMap, range)))
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
  }, context)
}
