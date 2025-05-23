import type { Hex } from '@xylabs/hex'

import {
  AttoXL1,
  xl1ConvertFactor,
} from '../xl1/index.ts'

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

export const minTransactionFees: TransactionFeesBigInt = {
  base: AttoXL1(1000n * xl1ConvertFactor('micro')),
  gasPrice: AttoXL1(1n * xl1ConvertFactor('micro')),
  gasLimit: AttoXL1(1000n * xl1ConvertFactor('micro')),
  priority: AttoXL1(0n * xl1ConvertFactor('micro')),
} as const

export const defaultTransactionFees: TransactionFeesBigInt = {
  base: minTransactionFees.base,
  gasPrice: AttoXL1(10n * xl1ConvertFactor('micro')),
  gasLimit: AttoXL1(1_000_000n * xl1ConvertFactor('micro')),
  priority: AttoXL1(0n * xl1ConvertFactor('micro')),
} as const
