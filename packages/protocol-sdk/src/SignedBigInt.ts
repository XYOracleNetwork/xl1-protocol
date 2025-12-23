import {
  type Hex,
  hexToBigInt,
  toHex,
} from '@xylabs/sdk-js'
import { isObject } from '@xylabs/sdk-js'

export interface NegativeBigInt {
  negative: Hex
}

export interface PositiveBigInt {
  positive: Hex
}

export type SignedBigInt = NegativeBigInt | PositiveBigInt

export const isNegativeBigInt = (value: unknown): value is NegativeBigInt => {
  return isObject(value) && 'negative' in value && typeof value.negative === 'string'
}

export const isPositiveBigInt = (value: unknown): value is PositiveBigInt => {
  return isObject(value) && 'positive' in value && typeof value.positive === 'string'
}

export const parseSignedBigInt = (value: SignedBigInt): bigint => {
  if (isNegativeBigInt(value)) {
    return -hexToBigInt(value.negative)
  } else if (isPositiveBigInt(value)) {
    return hexToBigInt(value.positive)
  } else {
    throw new Error('Invalid balance type')
  }
}

export const toSignedBigInt = (value: bigint): SignedBigInt => {
  return value < 0n ? { negative: toHex(-value) } : { positive: toHex(value) }
}

export const toPositiveBigInt = (value: unknown): PositiveBigInt => {
  if (isNegativeBigInt(value)) {
    return { positive: toHex(0n) }
  }
  if (isPositiveBigInt(value)) {
    return { positive: value.positive }
  }
  if (typeof value === 'bigint') {
    return { positive: toHex(value) }
  }
  throw new Error('Invalid value for positive big int')
}
