import type { Hex } from '@xylabs/hex'

import { MicroXL1 } from '../Xl1.ts'

export interface TransactionFeesBigInt {
  base: MicroXL1
  gasLimit: MicroXL1
  gasPrice: MicroXL1
  priority: MicroXL1
}

export const TransactionGasCosts = {
  byte: MicroXL1(10n),
  payloadValidation: MicroXL1(1000n),
  signatureValidation: MicroXL1(1000n),
  hashValidation: MicroXL1(100n),
  balanceValidation: MicroXL1(100n),
} as const

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

/** Gas Calculation
 *
 * 1 Million microXL1 (mXL1) = 1 XL1
 *
 * Gas amount is calculated as follows:
 *
 * 1. Each byte in the transaction cost 10 gas
 * 2. Each payload validation in the transaction costs 1000 gas
 * 3. Each signature verification in the transaction costs 1000 gas
 * 4. Each hash validation in the transaction costs 100 gas
 * 5. Each balance validation in the transaction costs 100 gas
 * 6. Processing/Compute/Storage Cost?
 * 7. operation Costs?
 *
 * The total gas cost is calculated by multiplying the gas amount by the gas price.
 *
 * minGasPrice is initially set to 100 mXL1
 * minBase is initially set to 1000 mXL1
 * minPriority is always 0 mXL1, but can be set to increase the priority of the transaction
 *
 */
