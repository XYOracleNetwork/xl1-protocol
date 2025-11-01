import type { RewardsByIndexViewerMethodsTemplate } from './RewardsByIndexViewerMethodsTemplate.ts'
import type { RewardsByPositionViewerOptions } from './RewardsViewerOptions.ts'

// Note: Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface RewardsByPositionViewerMethods extends RewardsByIndexViewerMethodsTemplate<RewardsByPositionViewerOptions, number> {}
export interface RewardsByPositionViewer extends RewardsByPositionViewerMethods {}
