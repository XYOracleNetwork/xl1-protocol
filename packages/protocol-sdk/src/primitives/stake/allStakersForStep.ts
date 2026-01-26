import { type Address } from '@xylabs/sdk-js'
import type { StepIdentity } from '@xyo-network/xl1-protocol'

import type { BlockViewer, StakedChainContextRead } from '../../model/index.ts'
import { externalBlockRangeFromXL1BlockRange } from '../chain/index.ts'
import { stepBlockRange } from '../step/index.ts'
import { allStakersForRange } from './allStakersForRange.ts'

export async function allStakersForStep(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
  stepContext: StepIdentity,
  staked: Address,
): Promise<Record<Address, bigint>> {
  const xl1BlockRange = stepBlockRange(stepContext)
  return await allStakersForRange(
    context.stake.stakeEvents,
    await externalBlockRangeFromXL1BlockRange(context, blockViewer, xl1BlockRange),
    staked,
  )
}
