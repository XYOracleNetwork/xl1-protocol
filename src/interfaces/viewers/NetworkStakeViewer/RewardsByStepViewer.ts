import type { StepIdentityString } from '../../../model/index.ts'
import type { RewardsByIndexViewerMethodsTemplate } from './RewardsByIndexViewerMethodsTemplate.ts'
import type { RewardsByStepViewerOptions } from './RewardsViewerOptions.ts'

// Note: Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface RewardsByStepViewerMethods extends RewardsByIndexViewerMethodsTemplate<RewardsByStepViewerOptions, StepIdentityString> {}
export interface RewardsByStepViewer extends RewardsByStepViewerMethods {}
