import type {
  BlockRange, BlockViewer, CachingContext, XL1BlockRange,
} from '@xyo-network/xl1-protocol'

import { externalBlockNumberFromXL1BlockNumber } from './externalBlockNumberFromXL1BlockNumber.ts'

export async function externalBlockRangeFromXL1BlockRange(
  context: CachingContext,
  blockViewer: BlockViewer,
  xl1BlockRange: XL1BlockRange,
  externalTimeName: 'ethereum' = 'ethereum',
): Promise<BlockRange> {
  const start = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[0], externalTimeName)
  const end = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[1], externalTimeName)
  return [start, end]
}
