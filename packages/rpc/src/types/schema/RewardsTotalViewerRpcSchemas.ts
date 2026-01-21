import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsTotalViewerRpcMethodName } from '../NetworkStakingStepRewardsTotalViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsTotalViewerRpcSchemas = {
  networkStakingStepRewardsTotalViewer_bonus: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  networkStakingStepRewardsTotalViewer_claimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  networkStakingStepRewardsTotalViewer_earned: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  networkStakingStepRewardsTotalViewer_total: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  networkStakingStepRewardsTotalViewer_unclaimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsTotalViewerRpcMethodName>

export type NetworkStakingStepRewardsTotalViewerRpcSchemas = typeof NetworkStakingStepRewardsTotalViewerRpcSchemas
