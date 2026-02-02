import {
  PendingBlocksOptionsZod, PendingTransactionsOptionsZod, SignedHydratedBlockWithHashMetaZod, SignedHydratedTransactionWithHashMetaZod,
} from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { MempoolViewerRpcMethodName } from '../MempoolViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const MempoolViewerRpcSchemas = {
  mempoolViewer_pendingBlocks: {
    params: {
      to: z.tuple([PendingBlocksOptionsZod.optional()]),
      from: z.tuple([PendingBlocksOptionsZod.optional()]),
    },
    result: {
      to: z.array(SignedHydratedBlockWithHashMetaZod),
      from: z.array(SignedHydratedBlockWithHashMetaZod),
    },
  },
  mempoolViewer_pendingTransactions: {
    params: {
      to: z.tuple([PendingTransactionsOptionsZod.optional()]),
      from: z.tuple([PendingTransactionsOptionsZod.optional()]),
    },
    result: {
      to: z.array(SignedHydratedTransactionWithHashMetaZod),
      from: z.array(SignedHydratedTransactionWithHashMetaZod),
    },
  },
} satisfies RpcSchemaMap<MempoolViewerRpcMethodName>

export type MempoolViewerRpcSchemas = typeof MempoolViewerRpcSchemas
