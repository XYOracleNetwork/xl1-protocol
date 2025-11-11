import type { AssertConfig } from '@xylabs/hex'
import { assertError } from '@xylabs/hex'
import { type Brand, isDefined } from '@xylabs/typeof'
import z from 'zod'

import {
  asXL1BlockNumber,
  type BlockNumber,
  NumberishXL1BlockNumberZod,
  XL1BlockNumberZod,
} from '../BlockNumber/index.ts'
import { zodAsFactory, zodToFactory } from '../zod/index.ts'

export type XL1BlockRange = [BlockNumber, BlockNumber]
export type NumberishXL1BlockRange = [BlockNumber, BlockNumber]

export const XL1BlockRangeZod = z.tuple([XL1BlockNumberZod, XL1BlockNumberZod])
export const NumberishXL1BlockRangeZod = z.tuple([NumberishXL1BlockNumberZod, NumberishXL1BlockNumberZod])

export const asXL1BlockRange = zodAsFactory<XL1BlockRange>(XL1BlockRangeZod)
export const toXL1BlockRange = zodToFactory<XL1BlockRange>(NumberishXL1BlockRangeZod)

export type XL1BlockRangeKey = Brand<string, { readonly __xl1BlockRangeKey: true }>
export const toXL1BlockNumberKey = (range: XL1BlockRange) => `${range[0]}|${range[1]}` as XL1BlockRangeKey

export function fromXL1BlockNumberKey(key: XL1BlockRangeKey): XL1BlockRange | undefined
export function fromXL1BlockNumberKey(key: XL1BlockRangeKey, assert: AssertConfig): XL1BlockRange
export function fromXL1BlockNumberKey(key: XL1BlockRangeKey, assert?: AssertConfig): XL1BlockRange | undefined {
  const [start, end] = key.split('|').map(v => asXL1BlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid XL1BlockRangeKey: ${key}`)
}
