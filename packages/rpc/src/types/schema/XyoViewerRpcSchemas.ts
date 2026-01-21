import {
  AddressZod,
  BigIntToJsonZod, HashZod, HexZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import { PayloadZodLoose } from '@xyo-network/payload-model'
import {
  asAttoXL1,
  BlockRangeZod,
  BlockRateZod,
  CountZod,
  JsonToStakeZod, SignedHydratedBlockWithHashMetaZod,
  SignedHydratedTransactionZod, SingleTimeConfigZod, StakeToJsonZod, StepIdentityZod,
  StepIndexZod,
  TimeDurationsZod,
  XL1BlockNumberZod, XL1BlockRangeZod,
} from '@xyo-network/xl1-protocol'
import { AccountBalanceHistoryItemZod } from '@xyo-network/xl1-protocol-sdk'
import { z } from 'zod'

import type { XyoViewerRpcMethodName } from '../XyoViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const XyoViewerRpcSchemas = {
  xyoViewer_networkStakeStepRewardClaimedByAddress: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardAddressReward: {
    params: {
      to: z.tuple([StepIdentityZod, AddressZod]),
      from: z.tuple([StepIdentityZod, AddressZod]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  xyoViewer_networkStakeStepRewardAddressHistory: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  xyoViewer_networkStakeStepRewardAddressShare: {
    params: {
      to: z.tuple([StepIdentityZod, AddressZod]),
      from: z.tuple([StepIdentityZod, AddressZod]),
    },
    result: {
      to: z.tuple([BigIntToJsonZod, BigIntToJsonZod]),
      from: z.tuple([JsonToBigIntZod, JsonToBigIntZod]),
    },
  },
  xyoViewer_networkStakeStepRewardWeightForAddress: {
    params: {
      to: z.tuple([StepIdentityZod, AddressZod]),
      from: z.tuple([StepIdentityZod, AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  xyoViewer_networkStakeStepRewardUnclaimedByAddress: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardPoolRewards: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod.transform(val => asAttoXL1(val))),
    },
  },
  xyoViewer_networkStakeStepRewardPositionWeight: {
    params: {
      to: z.tuple([StepIdentityZod, z.number()]),
      from: z.tuple([StepIdentityZod, z.number()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod,
    },
  },
  xyoViewer_networkStakeStepRewardPotentialPositionLoss: {
    params: {
      to: z.tuple([StepIdentityZod, z.number()]),
      from: z.tuple([StepIdentityZod, z.number()]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardForStep: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardRandomizer: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardStakerCount: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.number(),
      from: z.number(),
    },
  },
  xyoViewer_networkStakeStepRewardPoolShares: {
    params: {
      to: z.tuple([StepIdentityZod]),
      from: z.tuple([StepIdentityZod]),
    },
    result: {
      to: z.record(AddressZod, BigIntToJsonZod),
      from: z.record(AddressZod, JsonToBigIntZod),
    },
  },
  xyoViewer_networkStakeStepRewardForStepForPosition: {
    params: {
      to: z.tuple([StepIdentityZod, z.number()]),
      from: z.tuple([StepIdentityZod, z.number()]),
    },
    result: {
      to: z.tuple([BigIntToJsonZod, BigIntToJsonZod]),
      from: z.tuple([JsonToBigIntZod.transform(val => asAttoXL1(val)), JsonToBigIntZod.transform(val => asAttoXL1(val))]),
    },
  },
  xyoViewer_networkStakeStepRewardForPosition: {
    params: {
      to: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
      from: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
    },
    result: {
      to: z.tuple([BigIntToJsonZod, BigIntToJsonZod]),
      from: z.tuple([JsonToBigIntZod.transform(val => asAttoXL1(val)), JsonToBigIntZod.transform(val => asAttoXL1(val))]),
    },
  },
  xyoViewer_networkStakeStepRewardsForRange: {
    params: {
      to: z.tuple([z.tuple([z.number(), z.number()])]),
      from: z.tuple([z.tuple([z.number(), z.number()])]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardsForStepLevel: {
    params: {
      to: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
      from: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_networkStakeStepRewardsForPosition: {
    params: {
      to: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
      from: z.tuple([z.number(), z.tuple([z.number(), z.number()])]),
    },
    result: {
      to: z.record(z.string(), z.tuple([BigIntToJsonZod, BigIntToJsonZod])),
      from: z.record(z.string(), z.tuple([JsonToBigIntZod.transform(val => asAttoXL1(val)), JsonToBigIntZod.transform(val => asAttoXL1(val))])),
    },
  },
  xyoViewer_accountBalance: {
    params: {
      to: z.union([z.tuple([AddressZod]), z.tuple([AddressZod, z.union([XL1BlockRangeZod, HashZod])])]),
      from: z.union([z.tuple([AddressZod]), z.tuple([AddressZod, z.union([XL1BlockRangeZod, HashZod])])]),
    },
    result: {
      to: BigIntToJsonZod,
      from: JsonToBigIntZod.transform(val => asAttoXL1(val)),
    },
  },
  xyoViewer_accountBalanceHistory: {
    params: {
      to: z.union([z.tuple([AddressZod]), z.tuple([AddressZod, z.union([XL1BlockRangeZod, HashZod])])]),
      from: z.union([z.tuple([AddressZod]), z.tuple([AddressZod, z.union([XL1BlockRangeZod, HashZod])])]),
    },
    result: {
      to: z.array(AccountBalanceHistoryItemZod),
      from: z.array(AccountBalanceHistoryItemZod),
    },
  },
  xyoViewer_blocksByNumber: {
    params: {
      to: z.tuple([XL1BlockNumberZod, z.number().optional()]),
      from: z.tuple([XL1BlockNumberZod, z.number().optional()]),
    },
    result: {
      to: z.array(SignedHydratedBlockWithHashMetaZod),
      from: z.array(SignedHydratedBlockWithHashMetaZod),
    },
  },
  xyoViewer_blocksByHash: {
    params: {
      to: z.tuple([HashZod, z.number().optional()]),
      from: z.tuple([HashZod, z.number().optional()]),
    },
    result: {
      to: z.array(SignedHydratedBlockWithHashMetaZod),
      from: z.array(SignedHydratedBlockWithHashMetaZod),
    },
  },
  xyoViewer_currentBlock: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: SignedHydratedBlockWithHashMetaZod,
      from: SignedHydratedBlockWithHashMetaZod,
    },
  },
  xyoViewer_forkHistory: {
    params: {
      to: z.array(z.any()).length(0).optional(),
      from: z.array(z.any()).length(0).optional(),
    },
    result: {
      to: z.record(z.number(), HexZod),
      from: z.record(z.number(), HexZod),
    },
  },
  xyoViewer_stakeByStaker: {
    params: {
      to: z.tuple([AddressZod, z.number()]),
      from: z.tuple([AddressZod, z.number()]),
    },
    result: {
      to: StakeToJsonZod,
      from: JsonToStakeZod,
    },
  },
  xyoViewer_stakeById: {
    params: {
      to: z.tuple([z.number()]),
      from: z.tuple([z.number()]),
    },
    result: {
      to: StakeToJsonZod,
      from: JsonToStakeZod,
    },
  },
  xyoViewer_stakesByStaker: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: z.array(StakeToJsonZod),
      from: z.array(JsonToStakeZod),
    },
  },
  xyoViewer_stakesByStaked: {
    params: {
      to: z.tuple([AddressZod]),
      from: z.tuple([AddressZod]),
    },
    result: {
      to: z.array(StakeToJsonZod),
      from: z.array(JsonToStakeZod),
    },
  },
  xyoViewer_transactionByBlockHashAndIndex: {
    params: {
      to: z.tuple([HashZod, z.number()]),
      from: z.tuple([HashZod, z.number()]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  xyoViewer_transactionByBlockNumberAndIndex: {
    params: {
      to: z.tuple([z.number(), z.number()]),
      from: z.tuple([z.number(), z.number()]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  xyoViewer_transactionByHash: {
    params: {
      to: z.tuple([HashZod]),
      from: z.tuple([HashZod]),
    },
    result: {
      to: SignedHydratedTransactionZod.nullable(),
      from: SignedHydratedTransactionZod.nullable(),
    },
  },
  xyoViewer_payloadsByHash: {
    params: {
      to: z.tuple([z.array(HashZod)]),
      from: z.tuple([z.array(HashZod)]),
    },
    result: {
      to: z.array(PayloadZodLoose),
      from: z.array(PayloadZodLoose),
    },
  },
  xyoViewer_rate: {
    params: {
      to: z.tuple([BlockRangeZod, TimeDurationsZod.keyof().optional()]),
      from: z.tuple([BlockRangeZod, TimeDurationsZod.keyof().optional()]),
    },
    result: {
      to: BlockRateZod,
      from: BlockRateZod,
    },
  },
  xyoViewer_stepSizeRate: {
    params: {
      to: z.tuple([XL1BlockNumberZod, StepIndexZod, CountZod.optional(), TimeDurationsZod.keyof().optional()]),
      from: z.tuple([BlockRateZod]),
    },
    result: {
      to: BlockRateZod,
      from: BlockRateZod,
    },
  },
  xyoViewer_timeDurationRate: {
    params: {
      to: z.tuple([SingleTimeConfigZod, XL1BlockNumberZod.optional(), TimeDurationsZod.keyof().optional(), z.number().optional(), z.number().optional()]),
      from: z.tuple([BlockRateZod]),
    },
    result: {
      to: BlockRateZod,
      from: BlockRateZod,
    },
  },
} satisfies RpcSchemaMap<XyoViewerRpcMethodName>

export type XyoViewerRpcSchemas = typeof XyoViewerRpcSchemas
