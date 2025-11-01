import type { Address } from '@xylabs/hex'

import type { RewardsByIndexViewerMethodsTemplate } from './RewardsByIndexViewerMethodsTemplate.ts'
import type { RewardsByStakerViewerOptions } from './RewardsViewerOptions.ts'

// Note: Viewers are client objects that can nest other viewers and ViewerMethods objects consist only of methods that return data.

export interface RewardsByStakerViewerMethods extends RewardsByIndexViewerMethodsTemplate<RewardsByStakerViewerOptions, Address> {}
export interface RewardsByStakerViewer extends RewardsByStakerViewerMethods {}
