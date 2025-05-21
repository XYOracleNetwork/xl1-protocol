import type { Address } from '@xylabs/hex'

import type { BlockBoundWitness } from '../block/index.ts'
import type { Service } from './Service.ts'

export interface ElectionService extends Service {

  /**
   * Given the current block, get the leader for the next block
   * @param current The previous block
   */
  getCreatorCommitteeForNextBlock(current: BlockBoundWitness): Promise<Address[]>

}
