import { HashZod } from '@xylabs/sdk-js'
import { SignedHydratedTransactionWithHashMetaZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { TransactionViewerRpcMethodName } from '../TransactionViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const TransactionViewerRpcSchemas = {
  /** @deprecated use byBlockHashAndIndex instead */
  transactionViewer_transactionByBlockHashAndIndex: {
    params: {
      to: z.tuple([HashZod, z.number()]),
      from: z.tuple([HashZod, z.number()]),
    },
    result: {
      to: SignedHydratedTransactionWithHashMetaZod.nullable(),
      from: SignedHydratedTransactionWithHashMetaZod.nullable(),
    },
  },
  /** @deprecated use byBlockNumberAndIndex instead */
  transactionViewer_transactionByBlockNumberAndIndex: {
    params: {
      to: z.tuple([z.number(), z.number()]),
      from: z.tuple([z.number(), z.number()]),
    },
    result: {
      to: SignedHydratedTransactionWithHashMetaZod.nullable(),
      from: SignedHydratedTransactionWithHashMetaZod.nullable(),
    },
  },
  transactionViewer_byHash: {
    params: {
      to: z.tuple([HashZod]),
      from: z.tuple([HashZod]),
    },
    result: {
      to: SignedHydratedTransactionWithHashMetaZod.nullable(),
      from: SignedHydratedTransactionWithHashMetaZod.nullable(),
    },
  },
  /** @deprecated use byHash instead */
  transactionViewer_transactionByHash: {
    params: {
      to: z.tuple([HashZod]),
      from: z.tuple([HashZod]),
    },
    result: {
      to: SignedHydratedTransactionWithHashMetaZod.nullable(),
      from: SignedHydratedTransactionWithHashMetaZod.nullable(),
    },
  },
} satisfies RpcSchemaMap<TransactionViewerRpcMethodName>

export type TransactionViewerRpcSchemas = typeof TransactionViewerRpcSchemas
