import { type Brand } from '@xylabs/typeof'

import type { BlockNumber } from './BlockNumber.ts'
import { asBlockNumber, asBlockRange } from './BlockNumber.ts'

export type EthBlockNumber = Brand<BlockNumber, { __ethBlockNumber: true }>

export type EthBlockRange = [EthBlockNumber, EthBlockNumber]

export function asEthBlockNumber(value: unknown) {
  return asBlockNumber(value) as EthBlockNumber
}

export function asEthBlockRange(value: unknown) {
  return asBlockRange(value) as EthBlockRange
}

export const ETH_BLOCK_NUMBER_ZERO = asEthBlockNumber(0)
