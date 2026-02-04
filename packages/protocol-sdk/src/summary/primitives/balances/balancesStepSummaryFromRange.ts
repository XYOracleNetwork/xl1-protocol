import { type Address, spanRootAsync } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { WithHashMeta } from '@xyo-network/payload-model'
import { isAnyPayload } from '@xyo-network/payload-model'
import type {
  BlockViewer, CachingContext, MapType, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'
import type { Semaphore } from 'async-mutex'

import { deepCalculateFramesFromRange } from '../../../block/index.ts'
import { withContextCacheResponse } from '../../../model/index.ts'
import { netBalancesForPayloads } from '../../../payloads/index.ts'
import {
  parseSignedBigInt, type SignedBigInt, toSignedBigInt,
} from '../../../SignedBigInt.ts'
import type { BalancesStepSummary } from '../../model/index.ts'
import { BalancesStepSummarySchema } from '../../model/index.ts'

export async function balancesStepSummaryFromRange(
  context: CachingContext,
  semaphores: Semaphore[],
  blockViewer: BlockViewer,
  summaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>,
  range: XL1BlockRange,
): Promise<WithHashMeta<BalancesStepSummary>> {
  const cacheKey = `${range[0]}|${range[1]}`
  return await withContextCacheResponse(context, 'balancesStepSummaryFromRange', cacheKey, async () => {
    return await spanRootAsync('balancesStepSummaryFromRange', async () => {
      // console.log(`balanceStepSummaryFromRange: head=${head}, range=${range[0]}-${range[1]}`)
      const [frameHead] = assertEx(await blockViewer.blockByNumber(range[1]), () => `Block not found for number: ${range[1]}`)
      const frameSize = range[1] - range[0] + 1

      const key = `${frameHead._hash}|${frameSize}`

      return (frameSize === 1)
        ? await spanRootAsync(`balancesStepSummaryFromRange.frameSize=1[${key}]`, async () => {
            const [,payloads] = assertEx(await blockViewer.blockByNumber(range[0]), () => `Block not found for number: ${range[0]}`)
            const balances: Record<Address, SignedBigInt> = {}
            for (const [address, balance] of Object.entries(netBalancesForPayloads(payloads))) {
              balances[address as Address] = toSignedBigInt(balance)
            }
            return await PayloadBuilder.addHashMeta({
              schema: BalancesStepSummarySchema, hash: frameHead._hash, stepSize: -1, balances,
            })
          }, context)
        : await spanRootAsync(`balancesStepSummaryFromRange.frameSize>1[${key}]`, async () => {
            const step = StepSizes.indexOf(asXL1BlockNumber(frameSize, true))
            assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

            const summaryResult = await summaryMap.get(`${frameHead._hash}|${frameSize}`)
            if (isAnyPayload(summaryResult)) {
              return summaryResult as WithHashMeta<BalancesStepSummary>
            } else {
            // We do not have it, so lets build it
              await semaphores[step].acquire()
              try {
                const subRanges = deepCalculateFramesFromRange(range, step - 1)
                const promises = subRanges.map(subRange => balancesStepSummaryFromRange(
                  context,
                  semaphores,
                  blockViewer,
                  summaryMap,
                  subRange,
                ))
                const subResults = await Promise.all(promises)

                // add them all up
                const bigIntBalances: Record<Address, bigint> = {}
                for (const subResult of subResults) {
                  for (const [address, balance] of Object.entries(subResult.balances)) {
                    bigIntBalances[address as Address] = (bigIntBalances[address as Address] ?? 0n) + parseSignedBigInt(balance)
                  }
                }

                const balances: Record<Address, SignedBigInt> = {}
                for (const [address, balance] of Object.entries(bigIntBalances)) {
                  balances[address as Address] = toSignedBigInt(balance)
                }

                const result = await PayloadBuilder.addHashMeta({
                  schema: BalancesStepSummarySchema, hash: frameHead._hash, stepSize: frameSize, balances,
                })

                await summaryMap.set(key, result)
                return result
              } finally {
                semaphores[step].release()
              }
            }
          }, context)
    }, context)
  }, { max: 100_000 })
}
