import {
  AddressZod, BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { JsonToStakeZod, StakeToJsonZod } from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { StakeViewerRpcMethodName } from '../StakeViewerRpc.ts'
import { NoArgsZod } from './NoArgsZod.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const StakeViewerRpcSchemas = {

  stakeViewer_active: {
    params: {
      to: z.tuple([z.number().optional()]),
      from: z.tuple([z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_activeByAddressStaked: {
    params: {
      to: z.tuple([AddressZod, z.number().optional()]),
      from: z.tuple([AddressZod, z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_activeByStaker: {
    params: {
      to: z.tuple([AddressZod, z.number().optional()]),
      from: z.tuple([AddressZod, z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_minWithdrawalBlocks: {
    params: {
      to: NoArgsZod,
      from: NoArgsZod,
    },
    result: {
      to: z.number(),
      from: z.number(),
    },
  },
  stakeViewer_pending: {
    params: {
      to: z.tuple([z.number().optional()]),
      from: z.tuple([z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_pendingByStaker: {
    params: {
      to: z.tuple([AddressZod, z.number().optional()]),
      from: z.tuple([AddressZod, z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_rewardsContract: {
    params: {
      to: NoArgsZod,
      from: NoArgsZod,
    },
    result: {
      to: AddressZod,
      from: AddressZod,
    },
  },
  stakeViewer_stakeById: {
    params: {
      to: z.tuple([z.number()]),
      from: z.tuple([z.number()]),
    },
    result: {
      to: StakeToJsonZod,
      from: JsonToStakeZod,
    },
  },
  stakeViewer_stakeByStaker: {
    params: {
      to: z.tuple([AddressZod, z.number()]),
      from: z.tuple([AddressZod, z.number()]),
    },
    result: {
      to: StakeToJsonZod,
      from: JsonToStakeZod,
    },
  },
  stakeViewer_stakesByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: z.array(StakeToJsonZod),
      from: z.array(JsonToStakeZod),
    },
  },
  stakeViewer_stakesByStaked: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: z.array(StakeToJsonZod),
      from: z.array(JsonToStakeZod),
    },
  },
  stakeViewer_stakingTokenAddress: {
    params: {
      to: NoArgsZod,
      from: NoArgsZod,
    },
    result: {
      to: AddressZod,
      from: AddressZod,
    },
  },
  stakeViewer_withdrawn: {
    params: {
      to: z.tuple([z.number().optional()]),
      from: z.tuple([z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  stakeViewer_withdrawnByStaker: {
    params: {
      to: z.tuple([AddressZod, z.number().optional()]),
      from: z.tuple([AddressZod, z.number().optional()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
} satisfies RpcSchemaMap<StakeViewerRpcMethodName>

export type StakeViewerRpcSchemas = typeof StakeViewerRpcSchemas
