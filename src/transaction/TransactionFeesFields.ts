import type { Hex } from '@xylabs/hex'

import type { AttoXL1 } from '../xl1/index.ts'
import { MicroXL1 } from '../xl1/index.ts'

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
  base: MicroXL1(1000n).toAtto(),
  gasPrice: MicroXL1(1n).toAtto(),
  gasLimit: MicroXL1(1000n).toAtto(),
  priority: MicroXL1(0n).toAtto(),
} as const

export const defaultTransactionFees: TransactionFeesBigInt = {
  base: minTransactionFees.base,
  gasPrice: MicroXL1(10n).toAtto(),
  gasLimit: MicroXL1(1_000_000n).toAtto(),
  priority: minTransactionFees.priority,
} as const
