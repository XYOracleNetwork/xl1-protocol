import type { TransactionFeesBigInt } from '../transaction/index.ts'
import { AttoXL1 } from '../xl1/index.ts'

export const minTransactionFees: TransactionFeesBigInt = {
  base: AttoXL1(1n),
  gasPrice: AttoXL1(0n),
  gasLimit: AttoXL1(0n),
  priority: AttoXL1(0n),
} as const
