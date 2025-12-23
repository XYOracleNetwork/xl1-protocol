import type { Address } from '@xylabs/sdk-js'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type { BlockBoundWitness } from '@xyo-network/xl1-protocol'

export interface ElectionService {

  /**
   * Given the current block, get the leader for the next block
   * @param current The previous block
   */
  getCreatorCommitteeForNextBlock(current: WithHashMeta<BlockBoundWitness>): Promise<Address[]>

}
