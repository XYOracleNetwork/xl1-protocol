import type { AttoXL1 } from '../../../xl1/index.ts'
import type { RewardsViewerMethodsTemplate } from './RewardsViewerMethodsTemplate.ts'
import type { RewardsRangeOptions } from './RewardsViewerOptions.ts'

// Note: Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface RewardsTotalViewerMethods extends RewardsViewerMethodsTemplate<RewardsRangeOptions, AttoXL1> {}
export interface RewardsTotalViewer extends RewardsTotalViewerMethods {}
