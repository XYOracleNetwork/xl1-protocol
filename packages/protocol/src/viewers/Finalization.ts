import type { Hash, Promisable } from '@xylabs/sdk-js'

import type { SignedBlockBoundWitnessWithHashMeta, SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { XL1BlockNumber } from '../BlockNumber/index.ts'
import type { ChainId } from '../chain/index.ts'
import type { Provider } from '../provider/index.ts'

export interface FinalizationViewerMethods {
  head(): Promisable<SignedHydratedBlockWithHashMeta>
}

export const FinalizationViewerMoniker = 'FinalizationViewer' as const
export type FinalizationViewerMoniker = typeof FinalizationViewerMoniker

export interface FinalizationViewer extends FinalizationViewerMethods, Provider<FinalizationViewerMoniker> {
  chainId(): Promisable<ChainId>
  headBlock(): Promisable<SignedBlockBoundWitnessWithHashMeta>
  headHash(): Promisable<Hash>
  headNumber(): Promisable<XL1BlockNumber>
}
