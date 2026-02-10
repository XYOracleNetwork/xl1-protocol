import { SignedHydratedBlockWithHashMetaZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { FinalizationViewerRpcMethodName } from '../FinalizationViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const FinalizationViewerRpcSchemas = {
  finalizationViewer_head: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: SignedHydratedBlockWithHashMetaZod,
      from: SignedHydratedBlockWithHashMetaZod,
    },
  },
} satisfies RpcSchemaMap<FinalizationViewerRpcMethodName>

export type FinalizationViewerRpcSchemas = typeof FinalizationViewerRpcSchemas
