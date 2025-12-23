import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByStakerViewerRpcMethodName } from '../NetworkStakingStepRewardsByStakerViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByStakerViewerRpcSchemas = {
  networkStakingStepRewardsByStakerViewer_bonus: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStakerViewer_claimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStakerViewer_earned: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStakerViewer_total: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  networkStakingStepRewardsByStakerViewer_unclaimed: {
    params: {
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      from: z.record(AddressZod, BigIntToJsonZod),
      to: z.record(AddressZod, JsonToBigIntZod),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByStakerViewerRpcMethodName>

export type NetworkStakingStepRewardsByStakerViewerRpcSchemas = typeof NetworkStakingStepRewardsByStakerViewerRpcSchemas
