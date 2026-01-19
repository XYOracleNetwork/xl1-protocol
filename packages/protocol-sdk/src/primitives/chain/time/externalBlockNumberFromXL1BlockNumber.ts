import { assertEx, isArray } from '@xylabs/sdk-js'
import type { BlockNumber, XL1BlockNumber } from '@xyo-network/xl1-protocol'
import {
  asBlockNumber, asTimePayload, isTimePayload,
} from '@xyo-network/xl1-protocol'

import type { CachingBaseContext } from '../../../model/index.ts'
import { withContextCacheResponse } from '../../../model/index.ts'
import type { BlockViewer } from '../../../viewers/index.ts'

const functionName = 'externalBlockNumberFromXL1BlockNumber' as const

export async function externalBlockNumberFromXL1BlockNumber(
  context: CachingBaseContext,
  blockViewer: BlockViewer,
  xl1BlockNumber: XL1BlockNumber,
  externalTimeName: 'ethereum' | 'epoch',
  externalGenesisTime?: BlockNumber,
  timeBudgetMs = 2000,
): Promise<BlockNumber> {
  const cacheKey = `${xl1BlockNumber}-${externalTimeName}-${externalGenesisTime ?? 'default'}`
  return await withContextCacheResponse(context, functionName, cacheKey, async () => {
    const [, payloads = []] = await blockViewer.blockByNumber(xl1BlockNumber) ?? []
    assertEx(isArray(payloads))
    const timePayload = asTimePayload(payloads.find(isTimePayload))
    // the default here is the block number we know where the xl1 chain started running (first external staking - 1)
    return asBlockNumber(
      timePayload?.[externalTimeName] ?? externalGenesisTime ?? 23_372_716,
      { name: functionName },
    ) // default is xl1 mainnet genesis time
  }, { timeBudgetMs })
}
