import { assertEx } from '@xylabs/sdk-js'
import type {
  ChainContextRead,
  HydratedBlockWithHashMeta, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import { blockFromBlockNumber, hydrateBlock } from '../../block/index.ts'
import { withContextCacheResponse } from '../../model/index.ts'

export async function hydratedBlockByNumber(context: ChainContextRead, blockNumber: XL1BlockNumber): Promise<HydratedBlockWithHashMeta | null> {
  if (blockNumber < 0) throw new Error(`Block number ${blockNumber} is less than 0`)
  if (blockNumber > Number.MAX_SAFE_INTEGER) throw new Error(`Block number ${blockNumber} is greater than the maximum safe integer`)
  if (blockNumber % 1 !== 0) throw new Error(`Block number ${blockNumber} is not an integer`)
  const cacheKey = `${blockNumber}`
  return await withContextCacheResponse(context, 'hydratedBlockByNumber', cacheKey, async () => {
    const block = assertEx(
      await blockFromBlockNumber(context, blockNumber),
      () => `Could not find block for block number ${blockNumber}`,
    )
    return await hydrateBlock(context, block._hash)
  })
}
