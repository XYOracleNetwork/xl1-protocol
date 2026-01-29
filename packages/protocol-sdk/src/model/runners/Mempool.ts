import type { Hash } from '@xylabs/sdk-js'
import type {
  HydratedBlock,
  HydratedTransaction, SignedHydratedBlock, SignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'

import type { Provider } from '../Provider.ts'

export interface MempoolRunnerMethods {
  submitBlocks(blocks: SignedHydratedBlock[]): Promise<Hash[]>
  submitTransactions(transactions: SignedHydratedTransaction[]): Promise<Hash[]>
}

export const MempoolRunnerMoniker = 'MempoolRunner' as const
export type MempoolRunnerMoniker = typeof MempoolRunnerMoniker

export interface MempoolRunner extends MempoolRunnerMethods, Provider<MempoolRunnerMoniker> {
  prunePendingBlocks(): Promise<HydratedBlock[]>
  prunePendingTransactions(): Promise<HydratedTransaction[]>
}
