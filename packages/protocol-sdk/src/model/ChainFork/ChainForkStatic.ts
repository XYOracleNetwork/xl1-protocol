import type { Hash } from '@xylabs/sdk-js'
import type { ChainId } from '@xyo-network/xl1-protocol'

export interface ChainForkStatic {
  forkedAtBlockNumber: number
  forkedAtHash: Hash
  forkedChainId: ChainId
}
