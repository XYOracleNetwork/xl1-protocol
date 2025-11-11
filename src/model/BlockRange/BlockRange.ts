import type { AssertConfig } from '@xylabs/hex'
import { assertError } from '@xylabs/hex'
import { type Brand, isDefined } from '@xylabs/typeof'
import z from 'zod'

import {
  asBlockNumber,
  type BlockNumber, BlockNumberZod, NumberishBlockNumberZod,
} from '../BlockNumber/index.ts'
import { zodAsFactory, zodToFactory } from '../zod/index.ts'

export type BlockRange = [BlockNumber, BlockNumber]
export type NumberishBlockRange = [BlockNumber, BlockNumber]

export const BlockRangeZod = z.tuple([BlockNumberZod, BlockNumberZod])
export const NumberishBlockRangeZod = z.tuple([NumberishBlockNumberZod, NumberishBlockNumberZod])

export const asBlockRange = zodAsFactory<BlockRange>(BlockRangeZod)
export const toBlockRange = zodToFactory<BlockRange>(NumberishBlockRangeZod)

export type BlockRangeKey = Brand<string, { readonly __blockRangeKey: true }>
export const toBlockNumberKey = (range: BlockRange) => `${range[0]}|${range[1]}` as BlockRangeKey

export function fromBlockNumberKey(key: BlockRangeKey): BlockRange | undefined
export function fromBlockNumberKey(key: BlockRangeKey, assert: AssertConfig): BlockRange
export function fromBlockNumberKey(key: BlockRangeKey, assert?: AssertConfig): BlockRange | undefined {
  const [start, end] = key.split('|').map(v => asBlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid BlockRangeKey: ${key}`)
}
