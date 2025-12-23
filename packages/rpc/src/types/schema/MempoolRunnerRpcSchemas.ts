import { HashZod } from '@xylabs/sdk-js'
import { SignedHydratedBlockZod, SignedHydratedTransactionZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { MempoolRunnerRpcMethodName } from '../MempoolRunnerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const MempoolRunnerRpcSchemas = {
  mempoolRunner_submitBlocks: {
    params: {
      to: z.tuple([z.array(SignedHydratedBlockZod)]),
      from: z.tuple([z.array(SignedHydratedBlockZod)]),
    },
    result: {
      to: z.array(HashZod),
      from: z.array(HashZod),
    },
  },
  mempoolRunner_submitTransactions: {
    params: {
      to: z.tuple([z.array(SignedHydratedTransactionZod)]),
      from: z.tuple([z.array(SignedHydratedTransactionZod)]),
    },
    result: {
      to: z.array(HashZod),
      from: z.array(HashZod),
    },
  },
} satisfies RpcSchemaMap<MempoolRunnerRpcMethodName>

export type MempoolRunnerRpcSchemas = typeof MempoolRunnerRpcSchemas
