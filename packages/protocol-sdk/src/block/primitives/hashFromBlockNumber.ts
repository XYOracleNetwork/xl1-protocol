import { type Hash } from '@xylabs/sdk-js'
import type { ChainContextRead, XL1BlockNumber } from '@xyo-network/xl1-protocol'

import { blockFromBlockNumber } from './blockFromBlockNumber.ts'

export async function hashFromBlockNumber(context: ChainContextRead, blockNumber: XL1BlockNumber): Promise<Hash> {
  return (await blockFromBlockNumber(context, blockNumber))._hash
}
