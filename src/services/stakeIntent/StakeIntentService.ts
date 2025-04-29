import type { Address } from '@xylabs/hex'

import type { Intent } from '../../payload/index.ts'

export interface StakeIntentService {

  /**
   * Gets the declared ranges for an address based on historical on-chain data
   * @param address The address to get the declared ranges for
   * @param intent The declared intent to filter for
   */
  getDeclaredCandidateRanges(address: Address, intent: Intent): Promise<Readonly<Readonly<[number, number]>[]>>

  /**
   * Gets the declared candidates for a block based on historical on-chain data
   * @param block The block number to get the declared candidates for
   * @param intent The declared intent to filter for
  */
  getDeclaredCandidatesForBlock(block: number, intent: Intent): Promise<Address[]>

  /**
   * Checks if the address is staked for a block for a given intent
   * @param block The block number to check
   * @param intent The declared intent to filter for
   * @param address The address to check
   */
  isStakedForBlock(block: number, intent: Intent, address: Address): Promise<boolean>
}
