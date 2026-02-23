import { HashZod } from '@xylabs/sdk-js'
import { SignedHydratedTransactionZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { TransactionViewerRpcMethodName } from '../TransactionViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const TransactionViewerRpcSchemas = {
  transactionViewer_transactionByBlockHashAndIndex: {
    params: {
      to: z.tuple([HashZod, z.number()]),
      from: z.tuple([HashZod, z.number()]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  transactionViewer_transactionByBlockNumberAndIndex: {
    params: {
      to: z.tuple([z.number(), z.number()]),
      from: z.tuple([z.number(), z.number()]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  transactionViewer_byHash: {
    params: {
      to: z.tuple([HashZod]),
      from: z.tuple([HashZod]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  transactionViewer_transactionByHash: {
    params: {
      to: z.tuple([HashZod]),
      from: z.tuple([HashZod]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
} satisfies RpcSchemaMap<TransactionViewerRpcMethodName>

export type TransactionViewerRpcSchemas = typeof TransactionViewerRpcSchemas
