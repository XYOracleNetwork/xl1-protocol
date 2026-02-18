import type { AssertConfig, Brand } from '@xylabs/sdk-js'
import {
  assertError,
  isDefined, zodAsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { z } from 'zod'

import {
  asBlockNumber,
  type BlockNumber, BlockNumberishZod, BlockNumberZod,
} from '../../BlockNumber/index.ts'

export type BlockRange = [BlockNumber, BlockNumber]

export const BlockRangeZod = z.tuple([BlockNumberZod, BlockNumberZod])
export const BlockRangeishZod = z.tuple([BlockNumberishZod, BlockNumberishZod])

export type BlockRangeish = z.input<typeof BlockRangeishZod>

export const asBlockRange = zodAsFactory<BlockRange>(BlockRangeZod, 'BlockRange')
export const toBlockRange = zodToFactory<BlockRange>(BlockRangeishZod, 'BlockRange')

export type BlockRangeKey = Brand<string, { readonly __blockRangeKey: true }>
export const toBlockNumberKey = (range: BlockRange) => `${range[0]}|${range[1]}` as BlockRangeKey

export function fromBlockNumberKey(key: BlockRangeKey): BlockRange | undefined
export function fromBlockNumberKey(key: BlockRangeKey, assert: AssertConfig): BlockRange
export function fromBlockNumberKey(key: BlockRangeKey, assert?: AssertConfig): BlockRange | undefined {
  const [start, end] = key.split('|').map(v => asBlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid BlockRangeKey: ${key}`)
}
