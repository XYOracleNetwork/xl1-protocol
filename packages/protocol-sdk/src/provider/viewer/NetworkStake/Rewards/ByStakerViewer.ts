import type { Address } from '@xylabs/sdk-js'

import type { Provider } from '../../../../model/index.ts'
import type { NetworkStakeStepRewardsByStakerViewerOptions } from './Options.ts'
import type { NetworkStakeStepRewardsByIndexViewerMethodsTemplate } from './templates/index.ts'

// Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface NetworkStakeStepRewardsByStakerViewerMethods
  extends NetworkStakeStepRewardsByIndexViewerMethodsTemplate<NetworkStakeStepRewardsByStakerViewerOptions, Address> {}

export const NetworkStakeStepRewardsByStakerViewerMoniker = 'NetworkStakeStepRewardsByStakerViewer' as const
export type NetworkStakeStepRewardsByStakerViewerMoniker = typeof NetworkStakeStepRewardsByStakerViewerMoniker

export interface NetworkStakeStepRewardsByStakerViewer extends NetworkStakeStepRewardsByStakerViewerMethods,
  Provider<NetworkStakeStepRewardsByStakerViewerMoniker> {}
