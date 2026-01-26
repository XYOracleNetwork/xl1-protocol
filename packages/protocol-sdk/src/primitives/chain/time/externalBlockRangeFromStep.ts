import type { BlockRange, StepIdentity } from '@xyo-network/xl1-protocol'

import { toStepIdentityString } from '../../../block/index.ts'
import type { BlockViewer, CachingBaseContext } from '../../../model/index.ts'
import { withContextCacheResponse } from '../../../model/index.ts'
import { stepBlockRange } from '../../step/index.ts'
import { externalBlockRangeFromXL1BlockRange } from './externalBlockRangeFromXL1BlockRange.ts'

export async function externalBlockRangeFromStep(
  context: CachingBaseContext,
  blockViewer: BlockViewer,
  stepIdentity: StepIdentity,
): Promise<BlockRange> {
  const cacheKey = toStepIdentityString(stepIdentity)
  return await withContextCacheResponse(context, 'externalBlockRangeFromStep', cacheKey, async () => {
    const xl1BlockRange = stepBlockRange(stepIdentity)
    return await externalBlockRangeFromXL1BlockRange(context, blockViewer, xl1BlockRange)
  }, { timeBudgetMs: 1000 })
}
