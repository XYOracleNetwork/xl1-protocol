import { HashZod } from '@xylabs/sdk-js'
import { z } from 'zod'

import type { SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { SignedHydratedTransactionWithHashMeta } from '../model/index.ts'
import { XL1BlockRangeZod } from '../model/index.ts'
import type { Provider } from '../provider/index.ts'

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
