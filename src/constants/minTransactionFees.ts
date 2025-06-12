import type { TransactionFeesBigInt } from '../transaction/index.ts'
import { AttoXL1, AttoXL1ConvertFactor } from '../xl1/index.ts'

export const minTransactionFees: TransactionFeesBigInt = {
  base: AttoXL1(1000n * AttoXL1ConvertFactor.nano),
  gasPrice: AttoXL1(10n * AttoXL1ConvertFactor.nano),
  gasLimit: AttoXL1(1_000_000n * AttoXL1ConvertFactor.nano),
  priority: AttoXL1(0n * AttoXL1ConvertFactor.nano),
} as const
