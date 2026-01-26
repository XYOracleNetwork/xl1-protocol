import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'
import type { ChainStakeIntent, XL1BlockRange } from '@xyo-network/xl1-protocol'

import type { Provider } from '../Provider.ts'
import type { ChainQualified } from '../zod/index.ts'

export interface StakeIntentViewerMethods {
  qualifiedIntentByAddress(address: Address, headOrRange?: Hash | XL1BlockRange): Promisable<ChainQualified<ChainStakeIntent | null>>
}

export const StakeIntentViewerMoniker = 'StakeIntentViewer' as const
export type StakeIntentViewerMoniker = typeof StakeIntentViewerMoniker

export interface StakeIntentViewer extends StakeIntentViewerMethods, Provider<StakeIntentViewerMoniker> {
  intentByAddress(address: Address, headOrRange?: Hash | XL1BlockRange): Promisable<ChainStakeIntent | null>
}
