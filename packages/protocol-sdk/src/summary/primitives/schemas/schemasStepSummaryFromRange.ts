import { assertEx } from '@xylabs/sdk-js'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import type { Schema, WithHashMeta } from '@xyo-network/sdk-js'
import {
  isAnyPayload, isHashMeta, PayloadBuilder,
} from '@xyo-network/sdk-js'
import type {
  BlockViewer, CachingContext, MapType, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { type SchemasStepSummary, SchemasStepSummarySchema } from '../../model/index.ts'

export async function schemasStepSummaryFromRange(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<SchemasStepSummary>>,
  range: XL1BlockRange,
): Promise<WithHashMeta<SchemasStepSummary>> {
  // console.log(`balanceStepSummaryFromRange: head=${head}, range=${range[0]}-${range[1]}`)
  const [frameHead] = assertEx(await blockViewer.blockByNumber(range[1]), () => `Block not found for number: ${range[1]}`)
  const frameSize = range[1] - range[0] + 1

  let result: WithHashMeta<SchemasStepSummary> | undefined = undefined

  if (frameSize === 1) {
    const [block, payloads] = assertEx(await blockViewer.blockByNumber(range[0]), () => `Block not found for number: ${range[0]}`)
    const boundWitnesses = [block, ...payloads.filter(x => isBoundWitness(x) && isHashMeta(x))]
    const schemas: Record<Schema, number> = {}
    for (const bw of boundWitnesses) {
      schemas[bw.schema] = (schemas[bw.schema] ?? 0) + 1
      for (const schema of bw.payload_schemas) {
        schemas[schema] = (schemas[schema] ?? 0) + 1
      }
    }
    result = await PayloadBuilder.addHashMeta({
      schema: SchemasStepSummarySchema, hash: frameHead._hash, stepSize: -1, schemas,
    })
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const step = (StepSizes as any).indexOf(frameSize)
    assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

    const summaryResult = await summaryMap.get(`${frameHead._hash}|${frameSize}`)
    if (isAnyPayload(summaryResult)) {
      result = summaryResult as WithHashMeta<SchemasStepSummary>
    } else {
    // We do not have it, so lets build it
      await semaphores[step].acquire()
      try {
        const subRanges = deepCalculateFramesFromRange(range, step - 1)
        const promises = subRanges.map(subRange => schemasStepSummaryFromRange(
          context,
          semaphores,
          blockViewer,
          summaryMap,
          subRange,
        ))
        const subResults = await Promise.all(promises)

        // add them all up
        const schemas: Record<Schema, number> = {}
        for (const subResult of subResults) {
          for (const [schema, count] of Object.entries(subResult.schemas)) {
            const typedSchema = schema as Schema
            schemas[typedSchema] = (schemas[typedSchema] ?? 0) + count
          }
        }

        result = await PayloadBuilder.addHashMeta({
          schema: SchemasStepSummarySchema, hash: frameHead._hash, stepSize: frameSize, schemas: schemas,
        })

        await summaryMap.set(`${frameHead._hash}|${frameSize}`, result)
      } finally {
        semaphores[step].release()
      }
    }
  }
  // console.log(`balanceStepSummaryFromRange-result: head=${head}, range=${range[0]}-${range[1]}: ${toSafeJsonString(result, 10)}`)
  return await PayloadBuilder.addHashMeta(result)
}
