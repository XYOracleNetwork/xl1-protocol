import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { BlockNumberZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakeViewerRpcMethodName } from '../NetworkStakeViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakeViewerRpcSchemas = {
  networkStakeViewer_active: {
    params: {
      to: z.tuple([BlockNumberZod.optional()]),
      from: z.tuple([BlockNumberZod.optional()]),
    },
    result: {
      to: z.tuple([BigIntToJsonZod, z.number()]),
      from: z.tuple([JsonToBigIntZod, z.number()]),
    },
  },
} satisfies RpcSchemaMap<NetworkStakeViewerRpcMethodName>

export type NetworkStakeViewerRpcSchemas = typeof NetworkStakeViewerRpcSchemas
