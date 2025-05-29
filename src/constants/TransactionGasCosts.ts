import { AttoXL1, AttoXL1ConvertFactor } from '../xl1/index.ts'

export const TransactionGasCosts = {
  /**
   * The cost of storing each character that is added to the chain
   * This includes the transaction JSON and all the elevated payloads' JSON
  */
  characterStorage: AttoXL1(10n * AttoXL1ConvertFactor.micro),

  /** The cost of static validating every payload that will be included in the chain */
  payloadValidation: AttoXL1(1000n * AttoXL1ConvertFactor.micro),

  /** The cost of validating each signature that will be included in the chain */
  signatureValidation: AttoXL1(1000n * AttoXL1ConvertFactor.micro),

  /** The cost of validating each hash that will be included in the chain */
  hashValidation: AttoXL1(100n * AttoXL1ConvertFactor.micro),

  /** The cost of validating a balance state, triggered by a Transfer payload or gas collection */
  balanceValidation: AttoXL1(100n * AttoXL1ConvertFactor.micro),
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
