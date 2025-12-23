import type { BlockRange, XL1BlockRange } from '@xyo-network/xl1-protocol'

import type { BaseContext } from '../../../model/index.ts'
import type { BlockViewer } from '../../../viewers/index.ts'
import { externalBlockNumberFromXL1BlockNumber } from './externalBlockNumberFromXL1BlockNumber.ts'

export async function externalBlockRangeFromXL1BlockRange(
  context: BaseContext,
  blockViewer: BlockViewer,
  xl1BlockRange: XL1BlockRange,
  externalTimeName: 'ethereum' = 'ethereum',
): Promise<BlockRange> {
  const start = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[0], externalTimeName)
  const end = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[1], externalTimeName)
  return [start, end]
}
