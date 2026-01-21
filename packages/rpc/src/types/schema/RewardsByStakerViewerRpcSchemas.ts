import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { asAttoXL1, RewardsRangeOptionsZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { NetworkStakingStepRewardsByStakerViewerRpcMethodName } from '../NetworkStakingStepRewardsByStakerViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const NetworkStakingStepRewardsByStakerViewerRpcSchemas = {
  networkStakingStepRewardsByStakerViewer_bonus: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStakerViewer_claimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStakerViewer_earned: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStakerViewer_total: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  networkStakingStepRewardsByStakerViewer_unclaimed: {
    params: {
      to: z.tuple([RewardsRangeOptionsZod.optional()]),
      from: z.tuple([RewardsRangeOptionsZod.optional()]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
} satisfies RpcSchemaMap<NetworkStakingStepRewardsByStakerViewerRpcMethodName>

export type NetworkStakingStepRewardsByStakerViewerRpcSchemas = typeof NetworkStakingStepRewardsByStakerViewerRpcSchemas
