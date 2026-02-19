import { HashZod } from '@xylabs/sdk-js'
import { PayloadZod } from '@xyo-network/sdk-js'
import { ArrayBufferToJsonZod, JsonToArrayBufferZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { DataLakeViewerRpcMethodName } from '../DataLakeViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const DataLakeViewerRpcSchemas = {
  dataLakeViewer_get: {
    params: {
      to: z.tuple([z.array(HashZod)]),
      from: z.tuple([z.array(HashZod)]),
    },
    result: {
      to: z.array(z.union([PayloadZod, ArrayBufferToJsonZod])),
      from: z.array(z.union([PayloadZod, JsonToArrayBufferZod])),
    },
  },
  dataLakeViewer_next: {
    params: {
      to: z.tuple([z.object({}).loose()]),
      from: z.tuple([z.object({}).loose()]),
    },
    result: {
      to: z.array(z.union([PayloadZod, ArrayBufferToJsonZod])),
      from: z.array(z.union([PayloadZod, JsonToArrayBufferZod])),
    },
  },
} satisfies RpcSchemaMap<DataLakeViewerRpcMethodName>

export type DataLakeViewerRpcSchemas = typeof DataLakeViewerRpcSchemas
