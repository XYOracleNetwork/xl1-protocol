import { AddressZod } from '@xylabs/sdk-js'
import { SignedHydratedTransactionWithHashMetaZod, UnsignedHydratedTransactionZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { XyoSignerRpcMethodName } from '../XyoSignerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const XyoSignerRpcSchemas = {
  xyoSigner_address: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: AddressZod,
      from: AddressZod,
    },
  },
  xyoSigner_signTransaction: {
    params: {
      to: z.tuple([UnsignedHydratedTransactionZod]),
      from: z.tuple([UnsignedHydratedTransactionZod]),
    },
    result: {
      to: SignedHydratedTransactionWithHashMetaZod,
      from: SignedHydratedTransactionWithHashMetaZod,
    },
  },
} as const satisfies RpcSchemaMap<XyoSignerRpcMethodName>

export type XyoSignerRpcSchemas = typeof XyoSignerRpcSchemas
