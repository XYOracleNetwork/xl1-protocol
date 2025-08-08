import { type Hex, isHex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import { isObject } from '@xylabs/typeof'

import { type AttoXL1, isAttoXL1 } from '../xl1/index.ts'

export interface TransactionFeesBigInt {
  base: AttoXL1
  gasLimit: AttoXL1
  gasPrice: AttoXL1
  priority: AttoXL1
}

export type TransactionFeesHex = {
  [K in keyof TransactionFeesBigInt]: Hex;
}

export interface TransactionFeesFields {
  fees: TransactionFeesHex
}

export const isTransactionFeesBigInt = (value: unknown): value is TransactionFeesBigInt => {
  if (!isObject(value)) {
    return false
  }
  const {
    base, gasLimit, gasPrice, priority,
  } = value as TransactionFeesBigInt
  return (
    isAttoXL1(base)
    && isAttoXL1(gasLimit)
    && isAttoXL1(gasPrice)
    && isAttoXL1(priority)
  )
}

export const asTransactionFeesBigInt = AsObjectFactory.create<TransactionFeesBigInt>(
  isTransactionFeesBigInt,
)

export const isTransactionFeesHex = (value: unknown): value is TransactionFeesHex => {
  if (!isObject(value)) {
    return false
  }
  const {
    base, gasLimit, gasPrice, priority,
  } = value as TransactionFeesHex
  return (
    isHex(base)
    && isHex(gasLimit)
    && isHex(gasPrice)
    && isHex(priority)
  )
}

export const asTransactionFeesHex = AsObjectFactory.create<TransactionFeesHex>(
  isTransactionFeesHex,
)
