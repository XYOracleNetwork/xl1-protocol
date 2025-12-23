import type { Hex, Promisable } from '@xylabs/sdk-js'
import { hexToBigInt } from '@xylabs/sdk-js'
import type { TransactionFeesBigInt, TransactionFeesHex } from '@xyo-network/xl1-protocol'
import { AttoXL1 } from '@xyo-network/xl1-protocol'
import type { TransactionFeesInstance } from '@xyo-network/xl1-protocol-sdk'

function parseHexOrBigInt(value: Hex | bigint) {
  return AttoXL1((typeof value === 'bigint' ? value : hexToBigInt(value)))
}

export class FeesWrapper implements TransactionFeesInstance {
  base: AttoXL1
  gasLimit: AttoXL1
  gasPrice: AttoXL1
  priority: AttoXL1

  constructor({
    base, gasLimit, gasPrice, priority,
  }: TransactionFeesHex | TransactionFeesBigInt) {
    this.base = parseHexOrBigInt(base)
    this.gasLimit = parseHexOrBigInt(gasLimit)
    this.gasPrice = parseHexOrBigInt(gasPrice)
    this.priority = parseHexOrBigInt(priority)
  }

  static validate({
    base, gasLimit, gasPrice, priority,
  }: TransactionFeesHex | TransactionFeesBigInt): Promisable<Error[]> {
    const errors: Error[] = []
    const baseValue = parseHexOrBigInt(base)
    const gasLimitValue = parseHexOrBigInt(gasLimit)
    const gasPriceValue = parseHexOrBigInt(gasPrice)
    const priorityValue = parseHexOrBigInt(priority)
    if (baseValue <= 0n) {
      errors.push(new Error('Base fee cannot be negative or zero'))
    }
    if (gasLimitValue < 0n) {
      errors.push(new Error('Gas limit cannot be negative'))
    }
    if (gasPriceValue < 0n) {
      errors.push(new Error('Gas price cannot be negative'))
    }
    if (priorityValue < 0n) {
      errors.push(new Error('Priority cannot be negative'))
    }
    return errors
  }

  async validate(): Promise<Error[]> {
    return await FeesWrapper.validate({
      base: this.base, gasLimit: this.gasLimit, gasPrice: this.gasPrice, priority: this.priority,
    })
  }
}
