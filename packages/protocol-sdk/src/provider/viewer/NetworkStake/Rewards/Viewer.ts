import type { Provider } from '../../../../model/index.ts'
import type { NetworkStakeStepRewardsByPositionViewer } from './ByPositionViewer.ts'
import type { NetworkStakeStepRewardsByStakerViewer } from './ByStakerViewer.ts'
import type { NetworkStakeStepRewardsByStepViewer } from './ByStepViewer.ts'
import type { NetworkStakeStepRewardsTotalViewer } from './TotalViewer.ts'

export interface NetworkStakeStepRewardsViewerMethods {}

export const NetworkStakeStepRewardsViewerMoniker = 'NetworkStakeStepRewardsViewer' as const
export type NetworkStakeStepRewardsViewerMoniker = typeof NetworkStakeStepRewardsViewerMoniker

export interface NetworkStakeStepRewardsViewer extends NetworkStakeStepRewardsViewerMethods, Provider<NetworkStakeStepRewardsViewerMoniker> {
  position?: NetworkStakeStepRewardsByPositionViewer
  staker?: NetworkStakeStepRewardsByStakerViewer
  step?: NetworkStakeStepRewardsByStepViewer
  total?: NetworkStakeStepRewardsTotalViewer
}
