import type { AttoXL1 } from '@xyo-network/xl1-protocol'

import type { RecordKeyType } from '../../../../RecordKeyType.ts'
import type { NetworkStakeStepRewardsViewerMethodsTemplate } from './MethodsTemplate.ts'

export interface NetworkStakeStepRewardsByIndexViewerMethodsTemplate<TOptions, TResultIndex extends RecordKeyType>
  extends NetworkStakeStepRewardsViewerMethodsTemplate<TOptions, Record<TResultIndex, AttoXL1>> {}
