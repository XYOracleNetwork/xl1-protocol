import type { Hash } from '@xylabs/sdk-js'

import type {
  SignedBlockBoundWitnessWithHashMeta, SignedHydratedBlockWithHashMeta, XL1BlockNumber,
} from '../model/index.ts'
import type { Provider } from '../Provider.ts'

export interface FinalizationViewerMethods {
  head(): Promise<SignedHydratedBlockWithHashMeta>
}

export const FinalizationViewerMoniker = 'FinalizationViewer' as const
export type FinalizationViewerMoniker = typeof FinalizationViewerMoniker

export interface FinalizationViewer extends FinalizationViewerMethods, Provider<FinalizationViewerMoniker> {
  headBlock(): Promise<SignedBlockBoundWitnessWithHashMeta>
  headHash(): Promise<Hash>
  headNumber(): Promise<XL1BlockNumber>
}
