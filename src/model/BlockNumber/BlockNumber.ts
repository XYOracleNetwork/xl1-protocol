import { assertEx } from '@xylabs/assert'
import {
  type Brand, isArray, isNumber,
} from '@xylabs/typeof'

export type BlockNumber = Brand<number, { __blockNumber: true }>

export type BlockRange = [BlockNumber, BlockNumber]

export function asBlockNumber(value: unknown) {
  return assertEx(isNumber(value) ? (value as BlockNumber) : undefined, () => 'Not a valid BlockNumber')
}

export function asBlockRange(value: unknown) {
  if (isArray(value) && value.length === 2 && isNumber(value[0]) && isNumber(value[1])) {
    return value as BlockRange
  }
  throw new Error('Not a valid BlockNumberRange')
}

export const BLOCK_NUMBER_ZERO = asBlockNumber(0)
