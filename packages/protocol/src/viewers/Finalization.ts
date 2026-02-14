import type { Hash } from '@xylabs/sdk-js'

import type { SignedBlockBoundWitnessWithHashMeta, SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { XL1BlockNumber } from '../BlockNumber/index.ts'
import type { Provider } from '../provider/index.ts'

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
