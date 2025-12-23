import { HashToJsonZod, JsonToHashZod } from '@xylabs/sdk-js'
import { SignedHydratedTransactionZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { XyoRunnerRpcMethodName } from '../XyoRunnerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const XyoRunnerRpcSchemas = {
  xyoRunner_broadcastTransaction: {
    params: {
      to: z.tuple([SignedHydratedTransactionZod]),
      from: z.tuple([SignedHydratedTransactionZod]),
    },
    result: {
      to: HashToJsonZod,
      from: JsonToHashZod,
    },
  },
} satisfies RpcSchemaMap<XyoRunnerRpcMethodName>

export type XyoRunnerRpcSchemas = typeof XyoRunnerRpcSchemas
