import type { Hash } from '@xylabs/sdk-js'

import type { SignedHydratedBlockWithHashMeta } from '../model/index.ts'
import type { Provider } from '../Provider.ts'

export interface FinalizationRunnerMethods {
  finalizeBlocks(blocks: SignedHydratedBlockWithHashMeta[]): Promise<Hash[]>
}

export const FinalizationRunnerMoniker = 'FinalizationRunner' as const
export type FinalizationRunnerMoniker = typeof FinalizationRunnerMoniker

export interface FinalizationRunner extends FinalizationRunnerMethods, Provider<FinalizationRunnerMoniker> {
  finalizeBlock(block: SignedHydratedBlockWithHashMeta): Promise<Hash>
}
