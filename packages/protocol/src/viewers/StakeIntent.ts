import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'

import type { ChainQualified, XL1BlockRange } from '../model/index.ts'
import type { ChainStakeIntent } from '../payload/index.ts'
import type { Provider } from '../Provider.ts'

export interface StakeIntentViewerMethods {
  qualifiedIntentByAddress(address: Address, headOrRange?: Hash | XL1BlockRange): Promisable<ChainQualified<ChainStakeIntent | null>>
}

export const StakeIntentViewerMoniker = 'StakeIntentViewer' as const
export type StakeIntentViewerMoniker = typeof StakeIntentViewerMoniker

export interface StakeIntentViewer extends StakeIntentViewerMethods, Provider<StakeIntentViewerMoniker> {
  intentByAddress(address: Address, headOrRange?: Hash | XL1BlockRange): Promisable<ChainStakeIntent | null>
}
