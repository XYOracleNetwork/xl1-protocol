import { type Brand } from '@xylabs/typeof'

import type { BlockNumber } from './BlockNumber.ts'
import { asBlockNumber, asBlockRange } from './BlockNumber.ts'

export type XL1BlockNumber = Brand<BlockNumber, { readonly __xl1BlockNumber: true }>

export type XL1BlockRange = [XL1BlockNumber, XL1BlockNumber]

export function asXL1BlockNumber(value: unknown) {
  return asBlockNumber(value) as XL1BlockNumber
}

export function asXL1BlockRange(value: unknown) {
  return asBlockRange(value) as XL1BlockRange
}

export const XL1_BLOCK_NUMBER_ZERO = asXL1BlockNumber(0)

export type XL1BlockRangeKey = Brand<string, { readonly __blockRangeKey: true }>
export const toXL1BlockRangeKey = (range: XL1BlockRange) => `${range[0]}|${range[1]}` as XL1BlockRangeKey
export const fromXL1BlockNumberKey = (key: XL1BlockRangeKey): XL1BlockRange => {
  const [start, end] = key.split('|').map(v => asXL1BlockNumber(Number(v)))
  return [start, end]
}
