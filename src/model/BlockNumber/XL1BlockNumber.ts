import { type Brand } from '@xylabs/typeof'

import type { BlockNumber } from './BlockNumber.ts'
import { asBlockNumber, asBlockRange } from './BlockNumber.ts'

export type XL1BlockNumber = Brand<BlockNumber, { __xl1BlockNumber: true }>

export type XL1BlockRange = [XL1BlockNumber, XL1BlockNumber]

export function asXL1BlockNumber(value: unknown) {
  return asBlockNumber(value) as XL1BlockNumber
}

export function asXL1BlockNumberRange(value: unknown) {
  return asBlockRange(value) as XL1BlockRange
}

export const XL1_BLOCK_NUMBER_ZERO = asXL1BlockNumber(0)
