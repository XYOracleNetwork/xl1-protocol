import type { AttoXL1 } from '@xyo-network/xl1-protocol'

import type { Provider } from '../../../Provider.ts'
import type { NetworkStakeStepRewardsRangeOptions } from './Options.ts'
import type { NetworkStakeStepRewardsViewerMethodsTemplate } from './templates/index.ts'

// Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface NetworkStakeStepRewardsTotalViewerMethods extends NetworkStakeStepRewardsViewerMethodsTemplate<NetworkStakeStepRewardsRangeOptions, AttoXL1> {}

export const NetworkStakeStepRewardsTotalViewerMoniker = 'NetworkStakeStepRewardsTotalViewer' as const
export type NetworkStakeStepRewardsTotalViewerMoniker = typeof NetworkStakeStepRewardsTotalViewerMoniker

export interface NetworkStakeStepRewardsTotalViewer extends NetworkStakeStepRewardsTotalViewerMethods, Provider<NetworkStakeStepRewardsTotalViewerMoniker> {}
