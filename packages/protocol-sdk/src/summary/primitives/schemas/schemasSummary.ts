import { spanRootAsync } from '@xylabs/sdk-js'
import type { Schema } from '@xyo-network/payload-model'
import { asBlockBoundWitnessWithStorageMeta, asXL1BlockRange } from '@xyo-network/xl1-protocol'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import {
  type ChainQualified, type ChainQualifiedConfig, isChainQualifiedHeadConfig,
  isChainQualifiedRangeConfig,
} from '../../../model/index.ts'
import type { SchemasStepSummaryContext } from '../../model/index.ts'
import { schemasStepSummaryFromRange } from './schemasStepSummaryFromRange.ts'

export async function schemasSummary(
  context: SchemasStepSummaryContext,
  config?: ChainQualifiedConfig,
): Promise<ChainQualified<Record<Schema, number>>> {
  return await spanRootAsync('schemasSummary', async () => {
    const [headHash] = isChainQualifiedHeadConfig(config) ? [config.head] : await context.head()
    const headResult = await context.store.chainMap.get(headHash)
    const headBoundWitness = asBlockBoundWitnessWithStorageMeta(headResult, () => `Head block not found for hash: ${headHash}`)
    const range = isChainQualifiedRangeConfig(config) ? config.range : asXL1BlockRange([0, headBoundWitness.block], true)
    const ranges = deepCalculateFramesFromRange(asXL1BlockRange(
      range,
      { name: 'schemasSummary' },
    ))
    const summaries = await Promise.all(ranges.map(range => schemasStepSummaryFromRange(context, range)))
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
