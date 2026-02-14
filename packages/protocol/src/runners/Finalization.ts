import type { Hash } from '@xylabs/sdk-js'

import type { SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { Provider } from '../provider/index.ts'

export interface FinalizationRunnerMethods {
  finalizeBlocks(blocks: SignedHydratedBlockWithHashMeta[]): Promise<Hash[]>
}

export const FinalizationRunnerMoniker = 'FinalizationRunner' as const
export type FinalizationRunnerMoniker = typeof FinalizationRunnerMoniker

export interface FinalizationRunner extends FinalizationRunnerMethods, Provider<FinalizationRunnerMoniker> {
  finalizeBlock(block: SignedHydratedBlockWithHashMeta): Promise<Hash>
}
