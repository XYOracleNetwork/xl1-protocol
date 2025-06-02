import type { TransactionFeesBigInt } from '../transaction/index.ts'
import { AttoXL1 } from '../xl1/index.ts'

export const minTransactionFees: TransactionFeesBigInt = {
  base: AttoXL1(1000n),
  gasPrice: AttoXL1(10n),
  gasLimit: AttoXL1(1_000_000n),
  priority: AttoXL1(0n),
} as const
