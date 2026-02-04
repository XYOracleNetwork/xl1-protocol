/* eslint-disable max-statements */
import { type Address } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { WithHashMeta } from '@xyo-network/payload-model'
import { isAnyPayload } from '@xyo-network/payload-model'
import type {
  BlockViewer, CachingContext, MapType, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { netTransfersForPayloads } from '../../../payloads/index.ts'
import {
  parseSignedBigInt, type SignedBigInt, toSignedBigInt,
} from '../../../SignedBigInt.ts'
import { type TransfersStepSummary, TransfersStepSummarySchema } from '../../model/index.ts'
import { transfersSummaryKey } from './transfersSummary.ts'

export async function transfersStepSummaryFromRange(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>,
  range: XL1BlockRange,
): Promise<WithHashMeta<TransfersStepSummary>> {
  // console.log(`transfersStepSummaryFromRange: head=${context.head}, range=${range[0]}-${range[1]}`)
  const [frameHead] = assertEx(await blockViewer.blockByNumber(range[1]), () => `Block not found for number: ${range[1]}`)
  const frameSize = range[1] - range[0] + 1

  let result: WithHashMeta<TransfersStepSummary> | undefined = undefined

  if (frameSize === 1) {
    const [, payloads] = assertEx(await blockViewer.blockByNumber(range[0]), () => `Block not found for number: ${range[0]}`)
    const transfers: Record<Address, Record<Address, SignedBigInt>> = {}
    for (const [from, toMap] of Object.entries(netTransfersForPayloads(payloads))) {
      transfers[from as Address] = transfers[from as Address] ?? {}
      for (const [to, amount] of Object.entries(toMap)) {
        transfers[from as Address][to as Address] = toSignedBigInt(amount)
      }
    }
    result = await PayloadBuilder.addHashMeta({
      schema: TransfersStepSummarySchema, hash: frameHead._hash, stepSize: -1, transfers,
    })
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const step = (StepSizes as any).indexOf(frameSize)
    assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

    const key = transfersSummaryKey(frameHead._hash, frameSize)

    const summaryResult = await summaryMap.get(key)
    if (isAnyPayload(summaryResult)) {
      result = summaryResult as WithHashMeta<TransfersStepSummary>
    } else {
      await semaphores[step].acquire()
      // We do not have it, so lets build it
      try {
        const subRanges = deepCalculateFramesFromRange(range, step - 1)
        const promises = subRanges.map(subRange => transfersStepSummaryFromRange(
          context,
          semaphores,
          blockViewer,
          summaryMap,
          subRange,
        ))
        const subResults = await Promise.all(promises)

        // add them all up
        const bigIntBalances: Record<Address, Record<Address, bigint>> = {}
        for (const subResult of subResults) {
          for (const [from, toMap] of Object.entries(subResult.transfers)) {
            bigIntBalances[from as Address] = bigIntBalances[from as Address] ?? {}
            for (const [to, transfer] of Object.entries(toMap)) {
              bigIntBalances[from as Address][to as Address] = (bigIntBalances[from as Address][to as Address] ?? 0n) + parseSignedBigInt(transfer)
            }
          }
        }

        const transfers: Record<Address, Record<Address, SignedBigInt>> = {}
        for (const [from, toMap] of Object.entries(bigIntBalances)) {
          transfers[from as Address] = transfers[from as Address] ?? {}
          for (const [to, transfer] of Object.entries(toMap)) {
            transfers[from as Address][to as Address] = toSignedBigInt(transfer)
          }
        }

        result = await PayloadBuilder.addHashMeta({
          schema: TransfersStepSummarySchema, hash: frameHead._hash, stepSize: frameSize, transfers,
        })

        await summaryMap.set(key, result)
      } finally {
        semaphores[step].release()
      }
    }
  }
  // console.log(`transfersStepSummaryFromRange-result: head=${context.head}, range=${range[0]}-${range[1]}: ${toSafeJsonString(result, 10)}`)
  return result
}
