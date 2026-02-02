import type { Hash, Promisable } from '@xylabs/sdk-js'

import type { Provider, ProviderMoniker } from '../Provider.ts'
import type { HydratedBlockWithHashMeta } from '../zod/index.ts'
import type { BlockViewerMethods } from './Block.ts'

type ExtendableBlockViewerMethods = Omit<BlockViewerMethods, 'rate' | 'stepSizeRate' | 'timeDurationRate'>

export interface WindowedBlockViewerMethods extends ExtendableBlockViewerMethods {
  blocksByTransactionHashes(hashes: Hash[]): Promisable<HydratedBlockWithHashMeta[]>
}

export const WindowedBlockViewerMoniker = 'WindowedBlockViewer' as const
export type WindowedBlockViewerMoniker = typeof WindowedBlockViewerMoniker

export interface WindowedBlockViewer<TMoniker extends ProviderMoniker = WindowedBlockViewerMoniker> extends WindowedBlockViewerMethods, Provider<TMoniker> {
  blockByTransactionHash(hash: Hash): Promisable<HydratedBlockWithHashMeta | null>
}
