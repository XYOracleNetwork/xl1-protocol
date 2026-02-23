import { HashZod } from '@xylabs/sdk-js'
import { PayloadZodLoose, WithHashMetaZod } from '@xyo-network/sdk-js'
import { SignedHydratedBlockWithHashMetaZod, XL1BlockNumberZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { BlockViewerRpcMethodName } from '../BlockViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const BlockViewerRpcSchemas = {
  blockViewer_blocksByNumber: {
    params: {
      to: z.tuple([XL1BlockNumberZod, z.number().optional()]),
      from: z.tuple([XL1BlockNumberZod, z.number().optional()]),
    },
    result: {
      to: z.array(SignedHydratedBlockWithHashMetaZod),
      from: z.array(SignedHydratedBlockWithHashMetaZod),
    },
  },
  blockViewer_blocksByHash: {
    params: {
      to: z.tuple([HashZod, z.number().optional()]),
      from: z.tuple([HashZod, z.number().optional()]),
    },
    result: {
      to: z.array(SignedHydratedBlockWithHashMetaZod),
      from: z.array(SignedHydratedBlockWithHashMetaZod),
    },
  },
  blockViewer_currentBlock: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: SignedHydratedBlockWithHashMetaZod,
      from: SignedHydratedBlockWithHashMetaZod,
    },
  },
  blockViewer_payloadsByHash: {
    params: {
      to: z.tuple([z.array(HashZod)]),
      from: z.tuple([z.array(HashZod)]),
    },
    result: {
      to: z.array(WithHashMetaZod(PayloadZodLoose)),
      from: z.array(WithHashMetaZod(PayloadZodLoose)),
    },
  },
} satisfies RpcSchemaMap<BlockViewerRpcMethodName>

export type BlockViewerRpcSchemas = typeof BlockViewerRpcSchemas
