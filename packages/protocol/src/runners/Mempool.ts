import type { Hash } from '@xylabs/sdk-js'

import type { SignedHydratedBlock } from '../block/index.ts'
import type { SignedHydratedTransaction } from '../model/index.ts'
import type { Provider } from '../provider/index.ts'

export interface MempoolRunnerMethods {
  submitBlocks(blocks: SignedHydratedBlock[]): Promise<Hash[]>
  submitTransactions(transactions: SignedHydratedTransaction[]): Promise<Hash[]>
}

export const MempoolRunnerMoniker = 'MempoolRunner' as const
export type MempoolRunnerMoniker = typeof MempoolRunnerMoniker

export interface MempoolPruneOptions {
  batchSize?: number
  maxCheck?: number
  maxPrune?: number
}

export interface MempoolRunner extends MempoolRunnerMethods, Provider<MempoolRunnerMoniker> {
  prunePendingBlocks(options?: MempoolPruneOptions): Promise<[number, number]>
  prunePendingTransactions(options?: MempoolPruneOptions): Promise<[number, number]>
}
