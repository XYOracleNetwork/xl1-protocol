import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import { type Brand, isDefined } from '@xylabs/typeof'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import z from 'zod'

import type { XL1BlockNumber } from '../BlockNumber/index.ts'
import {
  asXL1BlockNumber,
  NumberishXL1BlockNumberZod,
  XL1BlockNumberZod,
} from '../BlockNumber/index.ts'

export type XL1BlockRange = [XL1BlockNumber, XL1BlockNumber]
export type NumberishXL1BlockRange = [XL1BlockNumber, XL1BlockNumber]

export const XL1BlockRangeZod = z.tuple([XL1BlockNumberZod, XL1BlockNumberZod])
export const NumberishXL1BlockRangeZod = z.tuple([NumberishXL1BlockNumberZod, NumberishXL1BlockNumberZod])

export const asXL1BlockRange = zodAsFactory<XL1BlockRange>(XL1BlockRangeZod, 'XL1BlockRange')
export const toXL1BlockRange = zodToFactory<XL1BlockRange>(NumberishXL1BlockRangeZod, 'XL1BlockRange')

export type XL1BlockRangeKey = Brand<string, { readonly __xl1BlockRangeKey: true }>
export const toXL1BlockNumberKey = (range: XL1BlockRange) => `${range[0]}|${range[1]}` as XL1BlockRangeKey

export function fromXL1BlockNumberKey(key: XL1BlockRangeKey): XL1BlockRange | undefined
export function fromXL1BlockNumberKey(key: XL1BlockRangeKey, assert: AssertConfig): XL1BlockRange
export function fromXL1BlockNumberKey(key: XL1BlockRangeKey, assert?: AssertConfig): XL1BlockRange | undefined {
  const [start, end] = key.split('|').map(v => asXL1BlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid XL1BlockRangeKey: ${key}`)
}
