import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByStepViewerRpcMethodName } from '../NetworkStakingStepRewardsByStepViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByStepViewerRpcSchemas = {
  networkStakingStepRewardsByStepViewer_bonus: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStepViewer_claimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStepViewer_earned: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStepViewer_total: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStepViewer_unclaimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByStepViewerRpcMethodName>

export type NetworkStakingStepRewardsByStepViewerRpcSchemas = typeof NetworkStakingStepRewardsByStepViewerRpcSchemas
