import type { RecordKeyType } from '../../../../RecordKeyType.ts'
import type { AttoXL1 } from '../../../../xl1/index.ts'
import type { NetworkStakeStepRewardsViewerMethodsTemplate } from './MethodsTemplate.ts'

export interface NetworkStakeStepRewardsByIndexViewerMethodsTemplate<TOptions, TResultIndex extends RecordKeyType>
  extends NetworkStakeStepRewardsViewerMethodsTemplate<TOptions, Record<TResultIndex, AttoXL1>> {}
