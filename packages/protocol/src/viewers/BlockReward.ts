import type { Promisable } from '@xylabs/sdk-js'

import type { XL1BlockNumber } from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { AttoXL1 } from '../xl1/index.ts'

export interface BlockRewardViewerMethods {
  // The amount of xl1 to send to the producer from the block reward
  allowedRewardForBlock(block: XL1BlockNumber): Promisable<AttoXL1>
}

export const BlockRewardViewerMoniker = 'BlockRewardViewer' as const
export type BlockRewardViewerMoniker = typeof BlockRewardViewerMoniker

export interface BlockRewardViewer extends BlockRewardViewerMethods, Provider<BlockRewardViewerMoniker> {}
