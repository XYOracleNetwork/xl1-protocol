import { type Address } from '@xylabs/sdk-js'
import type {
  BlockViewer, CachingContext, StakeEventsViewer, StepIdentity,
} from '@xyo-network/xl1-protocol'

import { externalBlockRangeFromXL1BlockRange } from '../chain/index.ts'
import { stepBlockRange } from '../step/index.ts'
import { allStakersForRange } from './allStakersForRange.ts'

export async function allStakersForStep(
  context: CachingContext,
  blockViewer: BlockViewer,
  stakeEventsViewer: StakeEventsViewer,
  stepContext: StepIdentity,
  staked: Address,
): Promise<Record<Address, bigint>> {
  const xl1BlockRange = stepBlockRange(stepContext)
  return await allStakersForRange(
    stakeEventsViewer,
    await externalBlockRangeFromXL1BlockRange(context, blockViewer, xl1BlockRange),
    staked,
  )
}
