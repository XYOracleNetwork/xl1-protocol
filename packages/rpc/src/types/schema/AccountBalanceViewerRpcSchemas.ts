import {
  AddressZod,
  BigIntToJsonZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import {
  AccountBalanceHistoryItemZod, ChainQualifiedConfigZod, ChainQualifiedZod,
} from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { AccountBalanceViewerRpcMethodName } from '../AccountBalanceViewerRpc.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const AccountBalanceViewerRpcSchemas = {
  accountBalanceViewer_qualifiedAccountBalances: {
    params: {
      to: z.tuple([z.array(AddressZod), ChainQualifiedConfigZod]),
      from: z.tuple([z.array(AddressZod), ChainQualifiedConfigZod]),
    },
    result: {
      to: ChainQualifiedZod(z.record(AddressZod, BigIntToJsonZod)),
      from: ChainQualifiedZod(z.record(AddressZod, JsonToBigIntZod)),
    },
  },
  accountBalanceViewer_qualifiedAccountBalanceHistories: {
    params: {
      to: z.tuple([z.array(AddressZod), ChainQualifiedConfigZod]),
      from: z.tuple([z.array(AddressZod), ChainQualifiedConfigZod]),
    },
    result: {
      to: ChainQualifiedZod(z.record(AddressZod, z.array(AccountBalanceHistoryItemZod))),
      from: ChainQualifiedZod(z.record(AddressZod, z.array(AccountBalanceHistoryItemZod))),
    },
  },
} satisfies RpcSchemaMap<AccountBalanceViewerRpcMethodName>

export type AccountBalanceViewerRpcSchemas = typeof AccountBalanceViewerRpcSchemas
