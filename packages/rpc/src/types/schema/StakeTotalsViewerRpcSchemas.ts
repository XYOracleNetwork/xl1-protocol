import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { asAttoXL1 } from '@xyo-network/xl1-protocol'
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
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_activeByStaked: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_activeByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_pending: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_pendingByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_withdrawn: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  stakeTotalsViewer_withdrawnByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
} satisfies RpcSchemaMap<StakeTotalsViewerRpcMethodName>

export type StakeTotalsViewerRpcSchemas = typeof StakeTotalsViewerRpcSchemas
