import { assertEx } from '@xylabs/sdk-js'
import type { ChainContextRead, XL1BlockNumber } from '@xyo-network/xl1-protocol'
import { asTimePayload, TimeSchema } from '@xyo-network/xl1-protocol'

import { hashFromBlockNumber, hydrateBlock } from '../../block/index.ts'

export async function xl1BlockNumberToEthBlockNumber(context: ChainContextRead, xl1BlockNumber: XL1BlockNumber): Promise<number> {
  const blockHash = await hashFromBlockNumber(context, xl1BlockNumber)
  const hydratedBlock = await hydrateBlock(context, blockHash)
  const timePayload = asTimePayload(hydratedBlock[1].find(p => p.schema === TimeSchema), { required: true })
  return assertEx(timePayload.ethereum, () => 'No ethereum timestamp found on block')
}
