import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { BlockNumberZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakeViewerRpcMethodName } from '../NetworkStakeViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakeViewerRpcSchemas = {
  networkStakeViewer_active: {
    params: {
      from: z.tuple([BlockNumberZod.optional()]),
      to: z.tuple([BlockNumberZod.optional()]),
    },
    result: {
      from: z.tuple([JsonToBigIntZod, z.number()]),
      to: z.tuple([BigIntToJsonZod, z.number()]),
    },
  },
} satisfies RpcSchemaMap<NetworkStakeViewerRpcMethodName>

export type NetworkStakeViewerRpcSchemas = typeof NetworkStakeViewerRpcSchemas
