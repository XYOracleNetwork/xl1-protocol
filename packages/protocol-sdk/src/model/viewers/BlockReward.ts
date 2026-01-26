import type { Promisable } from '@xylabs/sdk-js'
import type { AttoXL1, XL1BlockNumber } from '@xyo-network/xl1-protocol'

import type { Provider } from '../Provider.ts'

export interface BlockRewardViewerMethods {
  // The amount of xl1 to send to the producer from the block reward
  allowedRewardForBlock(block: XL1BlockNumber): Promisable<AttoXL1>
}

export const BlockRewardViewerMoniker = 'BlockRewardViewer' as const
export type BlockRewardViewerMoniker = typeof BlockRewardViewerMoniker

export interface BlockRewardViewer extends BlockRewardViewerMethods, Provider<BlockRewardViewerMoniker> {}
