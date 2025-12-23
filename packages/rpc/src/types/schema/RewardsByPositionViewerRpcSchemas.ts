import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByPositionViewerRpcMethodName } from '../NetworkStakingStepRewardsByPositionViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByPositionViewerRpcSchemas = {
  networkStakingStepRewardsByPositionViewer_bonus: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
      to: z.record(z.number(), BigIntToJsonZod),
    },
  },
  networkStakingStepRewardsByPositionViewer_claimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(z.number(), BigIntToJsonZod.transform(val => asAttoXL1(val))),
      to: z.record(z.number(), JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByPositionViewer_earned: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(z.number(), BigIntToJsonZod.transform(val => asAttoXL1(val))),
      to: z.record(z.number(), JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByPositionViewer_total: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(z.number(), BigIntToJsonZod.transform(val => asAttoXL1(val))),
      to: z.record(z.number(), JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByPositionViewer_unclaimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(z.number(), BigIntToJsonZod.transform(val => asAttoXL1(val))),
      to: z.record(z.number(), JsonToBigIntZod),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByPositionViewerRpcMethodName>

export type NetworkStakingStepRewardsByPositionViewerRpcSchemas = typeof NetworkStakingStepRewardsByPositionViewerRpcSchemas
