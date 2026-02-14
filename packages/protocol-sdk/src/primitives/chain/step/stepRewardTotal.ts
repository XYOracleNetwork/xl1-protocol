import { assertEx, isDefined } from '@xylabs/sdk-js'
import type {
  AttoXL1, BlockViewer, CachingContext, StepIdentity, XL1BlockRange, XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  asAttoXL1, asXL1BlockRange, isTransfer,
  XYO_STEP_REWARD_ADDRESS,
} from '@xyo-network/xl1-protocol'

import { withContextCacheResponse } from '../../../ChainContextHelpers.ts'
import { netTransfersForPayloads } from '../../../payloads/index.ts'
import { stepBlockRange, stepTransferIndex } from '../../step/index.ts'
import { stepRewardBlock } from './stepRewardBlock.ts'

function stepInRange(step: StepIdentity, range: XL1BlockRange): boolean {
  const stepRange = stepBlockRange(step)
  return ((stepRange[0] >= range[0]) && (stepRange[1] <= range[1]))
}

export async function stepRewardTotal(context: CachingContext, blockViewer: BlockViewer, { block, step }: StepIdentity, multipliers: XL1RangeMultipliers): Promise<AttoXL1> {
  const cacheKey = `${block}|${step}|${isDefined(multipliers)}`
  return await withContextCacheResponse(context, 'stepRewardTotal', cacheKey, async () => {
    const [blockBw, payloads] = await stepRewardBlock(context, blockViewer, { block, step })
    assertEx(blockBw.block === block, () => `Block Mismatch: expected ${block}, got ${blockBw.block}`)
    const [transferIndex] = stepTransferIndex(block, step)
    const stepTransfer = assertEx(
      payloads.find(p => isTransfer(p) && p.from === XYO_STEP_REWARD_ADDRESS),
      () => `No step transfer found for step ${step} at block ${block} (${blockBw._hash})`,
    )
    const rewards = assertEx(
      netTransfersForPayloads([stepTransfer])[XYO_STEP_REWARD_ADDRESS],
      () => `No rewards found for step reward address ${XYO_STEP_REWARD_ADDRESS} at block ${block} (${blockBw._hash})`,
    )
    const sortedTransfers = (Object.entries(rewards)).toSorted(([,a], [,b]) => a > b ? -1 : a < b ? 1 : 0)
    let result = asAttoXL1(sortedTransfers[transferIndex][1] * -1n)
    for (const [rangeKey, [numerator, denominator]] of Object.entries(multipliers)) {
      const rangeParts = rangeKey.split('|').map(Number)
      const range: XL1BlockRange = asXL1BlockRange([rangeParts[0], rangeParts[1]], { name: 'stepRewardTotal' })
      if (stepInRange({ block, step }, range)) {
        result = asAttoXL1(result + result * numerator / denominator)
      }
    }
    return result
  })
}
