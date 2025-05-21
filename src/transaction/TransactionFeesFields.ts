import type { Hex } from '@xylabs/hex'

import { MicroXL1 } from '../xl1/XL1.ts'

export interface TransactionFeesBigInt {
  base: MicroXL1
  gasLimit: MicroXL1
  gasPrice: MicroXL1
  priority: MicroXL1
}

export type TransactionFeesHex = {
  [K in keyof TransactionFeesBigInt]: Hex;
}

export interface TransactionFeesFields {
  fees: TransactionFeesHex
}

export const minTransactionFees: TransactionFeesBigInt = {
  base: MicroXL1(1000n), gasPrice: MicroXL1(1n), gasLimit: MicroXL1(1000n), priority: MicroXL1(0n),
} as const

export const defaultTransactionFees: TransactionFeesBigInt = {
  base: minTransactionFees.base, gasPrice: MicroXL1(10n), gasLimit: MicroXL1(1_000_000n), priority: MicroXL1(0n),
} as const
