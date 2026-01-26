import type { StepIdentityString } from '@xyo-network/xl1-protocol'

import type { Provider } from '../../../Provider.ts'
import type { NetworkStakeStepRewardsByStepViewerOptions } from './Options.ts'
import type { NetworkStakeStepRewardsByIndexViewerMethodsTemplate } from './templates/index.ts'

// Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface NetworkStakeStepRewardsByStepViewerMethods extends
  NetworkStakeStepRewardsByIndexViewerMethodsTemplate<NetworkStakeStepRewardsByStepViewerOptions, StepIdentityString> {}

export const NetworkStakeStepRewardsByStepViewerMoniker = 'NetworkStakeStepRewardsByStepViewer' as const
export type NetworkStakeStepRewardsByStepViewerMoniker = typeof NetworkStakeStepRewardsByStepViewerMoniker

export interface NetworkStakeStepRewardsByStepViewer extends NetworkStakeStepRewardsByStepViewerMethods, Provider<NetworkStakeStepRewardsByStepViewerMoniker> {}
