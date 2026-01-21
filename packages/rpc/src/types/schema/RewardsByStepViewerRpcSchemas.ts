import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByStepViewerRpcMethodName } from '../NetworkStakingStepRewardsByStepViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByStepViewerRpcSchemas = {
  networkStakingStepRewardsByStepViewer_bonus: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStepViewer_claimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStepViewer_earned: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStepViewer_total: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStepViewer_unclaimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByStepViewerRpcMethodName>

export type NetworkStakingStepRewardsByStepViewerRpcSchemas = typeof NetworkStakingStepRewardsByStepViewerRpcSchemas
