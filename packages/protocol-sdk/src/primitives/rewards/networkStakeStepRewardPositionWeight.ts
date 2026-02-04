import type {
  BlockViewer, CachingContext, StakeEventsViewer, StepIdentity,
} from '@xyo-network/xl1-protocol'
import { XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'

import { externalBlockRangeFromStep } from '../chain/index.ts'
import { weightedStakeForRangeByPosition } from '../stake/index.ts'

export async function networkStakeStepRewardPositionWeight(
  context: CachingContext,
  blockViewer: BlockViewer,
  stakeEventsViewer: StakeEventsViewer,
  stepContext: StepIdentity,
  position: number,
): Promise<bigint> {
  const result = await weightedStakeForRangeByPosition(
    context,
    blockViewer,
    stakeEventsViewer,
    await externalBlockRangeFromStep(context, blockViewer, stepContext),
    XYO_NETWORK_STAKING_ADDRESS,
    position,
  )
  return result
}
