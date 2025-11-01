import type { AttoXL1 } from '../../../xl1/index.ts'
import type { RecordKeyType } from './RecordKeyType.ts'
import type { RewardsViewerMethodsTemplate } from './RewardsViewerMethodsTemplate.ts'

export interface RewardsByIndexViewerMethodsTemplate<TOptions, TResultIndex extends RecordKeyType>
  extends RewardsViewerMethodsTemplate<TOptions, Record<TResultIndex, AttoXL1>> {}
