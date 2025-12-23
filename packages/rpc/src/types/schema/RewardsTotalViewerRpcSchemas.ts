import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsTotalViewerRpcMethodName } from '../NetworkStakingStepRewardsTotalViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsTotalViewerRpcSchemas = {
  networkStakingStepRewardsTotalViewer_bonus: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
      to: BigIntToJsonZod,
    },
  },
  networkStakingStepRewardsTotalViewer_claimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
      to: BigIntToJsonZod,
    },
  },
  networkStakingStepRewardsTotalViewer_earned: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
      to: BigIntToJsonZod,
    },
  },
  networkStakingStepRewardsTotalViewer_total: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
      to: BigIntToJsonZod,
    },
  },
  networkStakingStepRewardsTotalViewer_unclaimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
      to: BigIntToJsonZod,
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsTotalViewerRpcMethodName>

export type NetworkStakingStepRewardsTotalViewerRpcSchemas = typeof NetworkStakingStepRewardsTotalViewerRpcSchemas
