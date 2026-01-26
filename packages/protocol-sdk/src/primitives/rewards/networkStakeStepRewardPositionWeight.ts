import { type StepIdentity, XYO_NETWORK_STAKING_ADDRESS } from '@xyo-network/xl1-protocol'

import type { BlockViewer, StakedChainContextRead } from '../../model/index.ts'
import { externalBlockRangeFromStep } from '../chain/index.ts'
import { weightedStakeForRangeByPosition } from '../stake/index.ts'

export async function networkStakeStepRewardPositionWeight(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
  stepContext: StepIdentity,
  position: number,
): Promise<bigint> {
  const result = await weightedStakeForRangeByPosition(
    context,
    blockViewer,
    await externalBlockRangeFromStep(context, blockViewer, stepContext),
    XYO_NETWORK_STAKING_ADDRESS,
    position,
  )
  return result
}
