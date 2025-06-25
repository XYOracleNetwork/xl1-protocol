import type { TransactionFeesBigInt } from '../transaction/index.ts'
import { AttoXL1, AttoXL1ConvertFactor } from '../xl1/index.ts'
import { minTransactionFees } from './minTransactionFees.ts'

export const defaultTransactionFees: TransactionFeesBigInt = {
  base: minTransactionFees.base,
  gasPrice: AttoXL1(10n * AttoXL1ConvertFactor.nano),
  gasLimit: AttoXL1(1_000_000n * AttoXL1ConvertFactor.nano),
  priority: minTransactionFees.priority,
} as const
