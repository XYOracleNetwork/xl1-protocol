import { AccountBalanceViewerRpcSchemas } from './AccountBalanceViewerRpcSchemas.ts'
import { BlockViewerRpcSchemas } from './BlockViewerRpcSchemas.ts'
import { DataLakeViewerRpcSchemas } from './DataLakeViewerRpcSchema.ts'
import { MempoolRunnerRpcSchemas } from './MempoolRunnerRpcSchemas.ts'
import { MempoolViewerRpcSchemas } from './MempoolViewerRpcSchemas.ts'
import { NetworkStakeViewerRpcSchemas } from './NetworkStakeViewerRpcSchemas.ts'
import { NetworkStakingStepRewardsByPositionViewerRpcSchemas } from './RewardsByPositionViewerRpcSchemas.ts'
import { NetworkStakingStepRewardsByStakerViewerRpcSchemas } from './RewardsByStakerViewerRpcSchemas.ts'
import { NetworkStakingStepRewardsByStepViewerRpcSchemas } from './RewardsByStepViewerRpcSchemas.ts'
import { NetworkStakingStepRewardsTotalViewerRpcSchemas } from './RewardsTotalViewerRpcSchemas.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'
import { StakeTotalsViewerRpcSchemas } from './StakeTotalsViewerRpcSchemas.ts'
import { NetworkStakingStepRewardsViewerRpcSchemas } from './StepRewardsViewerRpcSchemas.ts'
import { StepViewerRpcSchemas } from './StepViewerRpcSchemas.ts'
import { TimeSyncViewerRpcSchemas } from './TimeSyncViewerRpcSchema.ts'
import { XyoPermissionsRpcSchemas } from './XyoPermissionsRpcSchemas.ts'
import { XyoRunnerRpcSchemas } from './XyoRunnerRpcSchemas.ts'
import { XyoSignerRpcSchemas } from './XyoSignerRpcSchemas.ts'
import { XyoViewerRpcSchemas } from './XyoViewerRpcSchemas.ts'

export const AllRpcSchemas = {
  ...AccountBalanceViewerRpcSchemas,
  ...XyoRunnerRpcSchemas,
  ...XyoSignerRpcSchemas,
  ...XyoViewerRpcSchemas,
  ...XyoPermissionsRpcSchemas,
  ...NetworkStakeViewerRpcSchemas,
  ...BlockViewerRpcSchemas,
  ...MempoolViewerRpcSchemas,
  ...MempoolRunnerRpcSchemas,
  ...TimeSyncViewerRpcSchemas,
  ...StepViewerRpcSchemas,
  ...DataLakeViewerRpcSchemas,
  ...StakeTotalsViewerRpcSchemas,
  ...NetworkStakingStepRewardsViewerRpcSchemas,
  ...NetworkStakingStepRewardsTotalViewerRpcSchemas,
  ...NetworkStakingStepRewardsByStepViewerRpcSchemas,
  ...NetworkStakingStepRewardsByStakerViewerRpcSchemas,
  ...NetworkStakingStepRewardsByPositionViewerRpcSchemas,
} satisfies RpcSchemaMap

export type AllRpcSchemas = typeof AllRpcSchemas
