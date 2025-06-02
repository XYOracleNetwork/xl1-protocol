import type { Hex } from '@xylabs/hex'

import type { AttoXL1 } from '../xl1/index.ts'

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
