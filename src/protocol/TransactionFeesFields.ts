import type { Hex } from '@xylabs/hex'

export interface TransactionFeesBigInt {
  base: bigint // In mXL1
  gasLimit: bigint // In mXL1
  gasPrice: bigint // In mXL1
  priority: bigint // In mXL1
}

export type TransactionFeesHex = {
  [K in keyof TransactionFeesBigInt]: Hex;
}

export interface TransactionFeesFields {
  fees: TransactionFeesHex
}

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
 * minPriority is alway 0 mXL1, but can be set to increase the priority of the transaction
 *
 */
