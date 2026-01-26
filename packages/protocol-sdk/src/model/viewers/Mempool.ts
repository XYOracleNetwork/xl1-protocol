import { HashZod } from '@xylabs/sdk-js'
import type { SignedHydratedBlockWithHashMeta, SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { XL1BlockRangeZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { Provider } from '../Provider.ts'

export const PendingTransactionsOptionsZod = z.object({
  cursor: HashZod.optional(),
  limit: z.number().int().positive().optional(),
  window: XL1BlockRangeZod.optional(),
})

export type PendingTransactionsOptions = z.infer<typeof PendingTransactionsOptionsZod>

export const PendingBlocksOptionsZod = z.object({
  cursor: HashZod.optional(),
  limit: z.number().int().positive().optional(),
  window: XL1BlockRangeZod.optional(),
})

export type PendingBlocksOptions = z.infer<typeof PendingBlocksOptionsZod>

export interface MempoolViewerMethods {
  pendingBlocks(options?: PendingBlocksOptions): Promise<SignedHydratedBlockWithHashMeta[]>
  pendingTransactions(options?: PendingTransactionsOptions): Promise<SignedHydratedTransactionWithHashMeta[]>
}

export const MempoolViewerMoniker = 'MempoolViewer' as const
export type MempoolViewerMoniker = typeof MempoolViewerMoniker

export interface MempoolViewer extends MempoolViewerMethods, Provider<MempoolViewerMoniker> {}
