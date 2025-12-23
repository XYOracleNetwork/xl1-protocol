import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import {
  JsonToStakeZod, StakeToJsonZod, StepIdentityZod,
} from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { StepViewerMethodName } from '../StepViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const StepViewerRpcSchemas = {
  randomizer: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: BigIntToJsonZod,
      to: JsonToBigIntZod,
    },
  },
  stake: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: BigIntToJsonZod,
      to: JsonToBigIntZod,
    },
  },
  stakers: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: z.array(AddressZod),
      to: z.array(AddressZod),
    },
  },
  weight: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: BigIntToJsonZod,
      to: JsonToBigIntZod,
    },
  },
  positionCount: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: z.number(),
      to: z.number(),
    },
  },
  positions: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: z.array(StakeToJsonZod),
      to: z.array(JsonToStakeZod),
    },
  },
  stakerCount: {
    params: {
      from: z.tuple([StepIdentityZod]),
      to: z.tuple([StepIdentityZod]),
    },
    result: {
      from: z.number(),
      to: z.number(),
    },
  },
} satisfies RpcSchemaMap<StepViewerMethodName>

export type StepViewerRpcSchemas = typeof StepViewerRpcSchemas
