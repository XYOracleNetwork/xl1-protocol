import type { Provider } from '../../../provider/index.ts'
import type { NetworkStakeStepRewardsByPositionViewerOptions } from './Options.ts'
import type { NetworkStakeStepRewardsByIndexViewerMethodsTemplate } from './templates/index.ts'

// Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface NetworkStakeStepRewardsByPositionViewerMethods extends
  NetworkStakeStepRewardsByIndexViewerMethodsTemplate<NetworkStakeStepRewardsByPositionViewerOptions, number> {}

export const NetworkStakeStepRewardsByPositionViewerMoniker = 'NetworkStakeStepRewardsByPositionViewer' as const
export type NetworkStakeStepRewardsByPositionViewerMoniker = typeof NetworkStakeStepRewardsByPositionViewerMoniker

export interface NetworkStakeStepRewardsByPositionViewer extends NetworkStakeStepRewardsByPositionViewerMethods,
  Provider<NetworkStakeStepRewardsByPositionViewerMoniker> {}
