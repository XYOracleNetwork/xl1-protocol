import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import {
  JsonToStakeZod, StakeToJsonZod, StepIdentityZod,
} from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { StepViewerMethodName } from '../StepViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const StepViewerRpcSchemas = {
  randomizer: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stake: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakers: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  weight: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  positionCount: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.number(),
      from: z.number(),
    },
  },
  positions: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.array(StakeToJsonZod),
      from: z.array(JsonToStakeZod),
    },
  },
  stakerCount: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.number(),
      from: z.number(),
    },
  },
} satisfies RpcSchemaMap<StepViewerMethodName>

export type StepViewerRpcSchemas = typeof StepViewerRpcSchemas
