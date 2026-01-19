import { type Address, spanRootAsync } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { WithHashMeta } from '@xyo-network/payload-model'
import { isAnyPayload } from '@xyo-network/payload-model'
import type { XL1BlockRange } from '@xyo-network/xl1-protocol'
import { StepSizes } from '@xyo-network/xl1-protocol'

import {
  deepCalculateFramesFromRange, hashFromBlockNumber,
  hydrateBlock,
} from '../../../block/index.ts'
import { netBalancesForPayloads } from '../../../payloads/index.ts'
import {
  parseSignedBigInt, type SignedBigInt, toSignedBigInt,
} from '../../../SignedBigInt.ts'
import type { BalancesStepSummary, BalanceStepSummaryContext } from '../../model/index.ts'
import { BalancesStepSummarySchema } from '../../model/index.ts'

export async function balancesStepSummaryFromRange(
  context: BalanceStepSummaryContext,
  range: XL1BlockRange,
): Promise<WithHashMeta<BalancesStepSummary>> {
  return await spanRootAsync('balancesStepSummaryFromRange', async () => {
  // console.log(`balanceStepSummaryFromRange: head=${head}, range=${range[0]}-${range[1]}`)
    const frameHeadHash = await hashFromBlockNumber(context, range[1])
    const frameSize = range[1] - range[0] + 1
    const [headHash] = await context.head()

    let result: WithHashMeta<BalancesStepSummary> | undefined

    if (frameSize === 1) {
      const hash = await hashFromBlockNumber(context, range[0])
      const [, payloads] = await hydrateBlock(context.store, hash)
      const balances: Record<Address, SignedBigInt> = {}
      for (const [address, balance] of Object.entries(netBalancesForPayloads(payloads))) {
        balances[address as Address] = toSignedBigInt(balance)
      }
      result = await PayloadBuilder.addHashMeta({
        schema: BalancesStepSummarySchema, hash: headHash, stepSize: -1, balances,
      })
    } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const step = (StepSizes as any).indexOf(frameSize)
      assertEx(step !== -1, () => `Invalid step size: ${frameSize}. Must be one of ${StepSizes.join(', ')}`)

      const summaryResult = await context.summaryMap.get(`${frameHeadHash}|${frameSize}`)
      if (isAnyPayload(summaryResult)) {
        result = summaryResult as WithHashMeta<BalancesStepSummary>
      } else {
        // We do not have it, so lets build it
        await context.stepSemaphores[step].acquire()
        try {
          const subRanges = deepCalculateFramesFromRange(range, step - 1)
          const promises = subRanges.map(subRange => balancesStepSummaryFromRange(
            context,
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

          result = await PayloadBuilder.addHashMeta({
            schema: BalancesStepSummarySchema, hash: frameHeadHash, stepSize: frameSize, balances,
          })

          await context.summaryMap.set(`${frameHeadHash}|${frameSize}`, result)
        } finally {
          context.stepSemaphores[step].release()
        }
      }
    }
    // console.log(`balanceStepSummaryFromRange-result: head=${head}, range=${range[0]}-${range[1]}: ${toSafeJsonString(result, 10)}`)
    // const finalResult = await PayloadBuilder.addHashMeta(result)
    return result
  }, { timeBudgetLimit: 500 })
}
