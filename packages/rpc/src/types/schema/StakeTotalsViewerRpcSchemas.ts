import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { z } from 'zod'

import type { StakeTotalsViewerRpcMethodName } from '../StakeTotalsViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const StakeTotalsViewerRpcSchemas = {
  stakeTotalsViewer_active: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_activeByStaked: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_activeByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_pending: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_pendingByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_withdrawn: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeTotalsViewer_withdrawnByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
} satisfies RpcSchemaMap<StakeTotalsViewerRpcMethodName>

export type StakeTotalsViewerRpcSchemas = typeof StakeTotalsViewerRpcSchemas
