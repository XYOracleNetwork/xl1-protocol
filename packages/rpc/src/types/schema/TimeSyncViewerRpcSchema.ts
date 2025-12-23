import { TimeDomainZod, TimePayloadZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { TimeSyncViewerRpcMethodName } from '../TimeSyncViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const TimeSyncViewerRpcSchemas = {
  timeSyncViewer_convertTime: {
    params: {
      from: z.tuple([TimeDomainZod, TimeDomainZod, z.number()]),
      to: z.tuple([TimeDomainZod, TimeDomainZod, z.number()]),
    },
    result: {
      from: z.number(),
      to: z.number(),
    },
  },
  timeSyncViewer_currentTime: {
    params: {
      from: z.tuple([TimeDomainZod]),
      to: z.tuple([TimeDomainZod]),
    },
    result: {
      from: z.tuple([TimeDomainZod, z.number()]),
      to: z.tuple([TimeDomainZod, z.number()]),
    },
  },
  timeSyncViewer_currentTimeAndHash: {
    params: {
      from: z.tuple([TimeDomainZod]),
      to: z.tuple([TimeDomainZod]),
    },
    result: {
      from: z.tuple([z.number(), z.nullable(z.string())]),
      to: z.tuple([z.number(), z.nullable(z.string())]),
    },
  },
  timeSyncViewer_currentTimePayload: {
    params: {
      from: z.tuple([]),
      to: z.tuple([]),
    },
    result: {
      from: TimePayloadZod,
      to: TimePayloadZod,
    },
  },
} satisfies RpcSchemaMap<TimeSyncViewerRpcMethodName>

export type TimeSyncViewerRpcSchemas = typeof TimeSyncViewerRpcSchemas
