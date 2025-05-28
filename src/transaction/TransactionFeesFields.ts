import type { Hex } from '@xylabs/hex'

import {
  AttoXL1,
  AttoXL1ConvertFactor,
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
  base: AttoXL1(1n),
  gasPrice: AttoXL1(1n),
  gasLimit: AttoXL1(1n),
  priority: AttoXL1(0n),
} as const

export const defaultTransactionFees: TransactionFeesBigInt = {
  base: AttoXL1(1000n * AttoXL1ConvertFactor.micro),
  gasPrice: AttoXL1(10n * AttoXL1ConvertFactor.micro),
  gasLimit: AttoXL1(1_000_000n * AttoXL1ConvertFactor.micro),
  priority: minTransactionFees.priority,
} as const
