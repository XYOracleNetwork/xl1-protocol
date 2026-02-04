import { assertEx } from '@xylabs/sdk-js'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Schema, WithHashMeta } from '@xyo-network/payload-model'
import { isAnyPayload, isHashMeta } from '@xyo-network/payload-model'
import type { XL1BlockRange } from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'

import {
  deepCalculateFramesFromRange, hashFromBlockNumber,
  hydrateBlock,
} from '../../../block/index.ts'
import {
  type SchemasStepSummary, type SchemasStepSummaryContext, SchemasStepSummarySchema,
} from '../../model/index.ts'

// eslint-disable-next-line max-statements
export async function schemasStepSummaryFromRange(
  context: SchemasStepSummaryContext,
  range: XL1BlockRange,
): Promise<WithHashMeta<SchemasStepSummary>> {
  // console.log(`balanceStepSummaryFromRange: head=${head}, range=${range[0]}-${range[1]}`)
  const frameHeadHash = await hashFromBlockNumber(context, range[1])
  const frameSize = range[1] - range[0] + 1
  const headHash = context.head._hash

  let result: WithHashMeta<SchemasStepSummary> | undefined = undefined

  if (frameSize === 1) {
    const hash = await hashFromBlockNumber(context, range[0])
    const [block, payloads] = await hydrateBlock(context, hash)
    const boundWitnesses = [block, ...payloads.filter(x => isBoundWitness(x) && isHashMeta(x))]
    const schemas: Record<Schema, number> = {}
    for (const bw of boundWitnesses) {
      schemas[bw.schema] = (schemas[bw.schema] ?? 0) + 1
      for (const schema of bw.payload_schemas) {
        schemas[schema] = (schemas[schema] ?? 0) + 1
      }
    }
    result = await PayloadBuilder.addHashMeta({
      schema: SchemasStepSummarySchema, hash: headHash, stepSize: -1, schemas,
    })
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const step = (StepSizes as any).indexOf(frameSize)
    assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

    const summaryResult = await context.summaryMap.get(`${frameHeadHash}|${frameSize}`)
    if (isAnyPayload(summaryResult)) {
      result = summaryResult as WithHashMeta<SchemasStepSummary>
    } else {
    // We do not have it, so lets build it
      await context.stepSemaphores[step].acquire()
      try {
        const subRanges = deepCalculateFramesFromRange(range, step - 1)
        const promises = subRanges.map(subRange => schemasStepSummaryFromRange(
          context,
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
          schema: SchemasStepSummarySchema, hash: frameHeadHash, stepSize: frameSize, schemas: schemas,
        })

        await context.summaryMap.set(`${frameHeadHash}|${frameSize}`, result)
      } finally {
        context.stepSemaphores[step].release()
      }
    }
  }
  // console.log(`balanceStepSummaryFromRange-result: head=${head}, range=${range[0]}-${range[1]}: ${toSafeJsonString(result, 10)}`)
  return await PayloadBuilder.addHashMeta(result)
}
