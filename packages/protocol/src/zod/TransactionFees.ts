import {
  BigIntToJsonZod, HexZod, JsonToBigIntZod,
} from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { z } from 'zod'

import { asAttoXL1 } from '../xl1/index.ts'

export const AttoZod = z.bigint()
export const JsonToAttoZod = JsonToBigIntZod.transform(v => asAttoXL1(v))
// eslint-disable-next-line unicorn/prefer-export-from
export const AttoToJsonZod = BigIntToJsonZod

export const TransactionFeesHexZod = z.object({
  base: HexZod,
  gasLimit: HexZod,
  gasPrice: HexZod,
  priority: HexZod,
})

export type TransactionFeesHex = z.infer<typeof TransactionFeesHexZod>

export const isTransactionFeesHex = zodIsFactory(TransactionFeesHexZod)
export const asTransactionFeesHex = zodAsFactory(TransactionFeesHexZod, 'asTransactionFeesHex')
export const toTransactionFeesHex = zodToFactory(TransactionFeesHexZod, 'toTransactionFeesHex')

export const TransactionFeesBigIntZod = z.object({
  base: AttoZod,
  gasLimit: AttoZod,
  gasPrice: AttoZod,
  priority: AttoZod,
})

export type TransactionFeesBigInt = z.infer<typeof TransactionFeesBigIntZod>

export const isTransactionFeesBigInt = zodIsFactory(TransactionFeesBigIntZod)
export const asTransactionFeesBigInt = zodAsFactory(TransactionFeesBigIntZod, 'asTransactionFeesBigInt')
export const toTransactionFeesBigInt = zodToFactory(TransactionFeesBigIntZod, 'toTransactionFeesBigInt')

export const TransactionFeesJsonToBigIntZod = TransactionFeesHexZod.transform(val => ({
  base: JsonToBigIntZod.parse(val.base),
  gasLimit: JsonToBigIntZod.parse(val.gasLimit),
  gasPrice: JsonToBigIntZod.parse(val.gasPrice),
  priority: JsonToBigIntZod.parse(val.priority),
}))

export const TransactionFeesBigIntToJsonZod = TransactionFeesBigIntZod.transform(val => ({
  base: BigIntToJsonZod.parse(val.base),
  gasLimit: BigIntToJsonZod.parse(val.gasLimit),
  gasPrice: BigIntToJsonZod.parse(val.gasPrice),
  priority: BigIntToJsonZod.parse(val.priority),
}))

export type TransactionFeesJsonToBigIntZodType = z.infer<typeof TransactionFeesJsonToBigIntZod>
export type TransactionFeesBigIntToJsonZodType = z.infer<typeof TransactionFeesBigIntToJsonZod>
