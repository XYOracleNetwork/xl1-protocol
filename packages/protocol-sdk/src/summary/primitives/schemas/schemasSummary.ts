import { assertEx, spanRootAsync } from '@xylabs/sdk-js'
import type { Schema, WithHashMeta } from '@xyo-network/payload-model'
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
import type { SchemasStepSummary } from '../../model/index.ts'
import { schemasStepSummaryFromRange } from './schemasStepSummaryFromRange.ts'

export async function schemasSummary(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<SchemasStepSummary>>,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Schema, number>>> {
  return await spanRootAsync('schemasSummary', async () => {
    const headHash = isChainQualifiedHeadConfig(config) ? config.head : await blockViewer.currentBlockHash()
    const [head] = assertEx(await blockViewer.blockByHash(headHash), () => `Block not found for hash: ${headHash}`)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(head, () => `Found Block not a BlockWithHashMeta: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'schemasSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => schemasStepSummaryFromRange(context, semaphores, blockViewer, summaryMap, range)))
    const results: Record<Schema, number> = {}
    for (let summary of summaries) {
      for (const [schema, count] of Object.entries(summary.schemas)) {
        const typedSchema = schema as Schema
        results[typedSchema] = (results[typedSchema] ?? 0) + count
      }
    }
    return [results, { range, head: headHash }]
  }, context)
}
