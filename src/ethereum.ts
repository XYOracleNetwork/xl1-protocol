import type { Hex } from '@xylabs/hex'
import { toHex } from '@xylabs/hex'
import type { AccountInstance } from '@xyo-network/account-model'
import { getAddress } from 'ethers'
import { parseUnits } from 'ethers/utils'

export interface GasConfig {
  gasLimit?: number
  gasPrice?: bigint
}

export const getDefaultGasConfig = (): GasConfig => {
  return {
    gasLimit: 2_000_000, // Set the gas limit
    gasPrice: parseUnits('100', 'gwei'),
  }
}

export type EthAddress = Hex

export const ETH_ZERO_ADDRESS: EthAddress = '0x0000000000000000000000000000000000000000' as const

export const toEthAddress = (value: bigint | string | AccountInstance): EthAddress => {
  const address = (typeof value === 'object') ? value.address : value
  return getAddress(toHex(address, { prefix: true, bitLength: 160 })) as EthAddress
}
