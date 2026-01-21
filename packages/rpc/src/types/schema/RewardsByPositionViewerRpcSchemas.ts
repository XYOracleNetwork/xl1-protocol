import { BigIntToJsonZod, JsonToBigIntZod } from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByPositionViewerRpcMethodName } from '../NetworkStakingStepRewardsByPositionViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByPositionViewerRpcSchemas = {
  networkStakingStepRewardsByPositionViewer_bonus: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(z.number(), BigIntToJsonZod),
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByPositionViewer_claimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(z.number(), BigIntToJsonZod),
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByPositionViewer_earned: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(z.number(), BigIntToJsonZod),
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByPositionViewer_total: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(z.number(), BigIntToJsonZod),
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByPositionViewer_unclaimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(z.number(), BigIntToJsonZod),
      from: z.record(z.number(), JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByPositionViewerRpcMethodName>

export type NetworkStakingStepRewardsByPositionViewerRpcSchemas = typeof NetworkStakingStepRewardsByPositionViewerRpcSchemas
