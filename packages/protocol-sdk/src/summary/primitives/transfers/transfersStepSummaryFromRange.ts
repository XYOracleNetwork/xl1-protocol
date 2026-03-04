/* eslint-disable max-statements */
import type { Address, Hash } from '@xylabs/sdk-js'
import { assertEx, spanRootAsync } from '@xylabs/sdk-js'
import { isAnyPayload } from '@xyo-network/sdk-js'
import type {
  BlockViewer, CachingContext, MapType, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { withContextCacheResponse } from '../../../ChainContextHelpers.ts'
import { netTransfersForPayloads } from '../../../payloads/index.ts'
import {
  parseSignedBigInt, type SignedBigInt, toSignedBigInt,
} from '../../../SignedBigInt.ts'
import {
  asTransfersStepSummary, type TransfersStepSummary, TransfersStepSummarySchema,
} from '../../model/index.ts'

export function transfersSummaryKey(frameHeadHash: Hash, frameSize: number) {
  return `${frameHeadHash}|${frameSize}`
}

export async function transfersStepSummaryFromRange(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, TransfersStepSummary>,
  range: XL1BlockRange,
): Promise<TransfersStepSummary> {
  const cacheKey = `${range[0]}|${range[1]}`
  return await withContextCacheResponse(context, 'transfersStepSummaryFromRange', cacheKey, async () => {
    return await spanRootAsync('transfersStepSummaryFromRange', async () => {
      const [frameHead] = assertEx(await blockViewer.blockByNumber(range[1]), () => `Block not found for number: ${range[1]}`)
      const frameSize = range[1] - range[0] + 1

      let result: TransfersStepSummary | undefined

      if (frameSize === 1) {
        const [, payloads] = assertEx(await blockViewer.blockByNumber(range[0]), () => `Block not found for number: ${range[0]}`)
        const transfers: Record<Address, Record<Address, SignedBigInt>> = {}
        for (const [from, toMap] of Object.entries(netTransfersForPayloads(payloads))) {
          transfers[from as Address] = transfers[from as Address] ?? {}
          for (const [to, amount] of Object.entries(toMap)) {
            transfers[from as Address][to as Address] = toSignedBigInt(amount)
          }
        }
        result = {
          schema: TransfersStepSummarySchema, hash: frameHead._hash, stepSize: -1, transfers,
        }
      } else {
        const step = (StepSizes).indexOf(asXL1BlockNumber(frameSize, true))
        assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

        const key = transfersSummaryKey(frameHead._hash, frameSize)

        const summaryResult = await summaryMap.get(key)
        if (isAnyPayload(summaryResult)) {
          result = asTransfersStepSummary(summaryResult, { required: true })
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

            result = {
              schema: TransfersStepSummarySchema, hash: frameHead._hash, stepSize: frameSize, transfers,
            }

            await summaryMap.set(key, result)
          } finally {
            semaphores[step].release()
          }
        }
      }
      return result
    }, { ...context, timeBudgetLimit: 500 })
  }, { max: 100_000 })
}
