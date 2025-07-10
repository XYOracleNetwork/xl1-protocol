import type { Address } from '@xylabs/hex'

import type { Intent } from '../../payload/index.ts'
import type { Service } from '../Service.ts'

/** @public */
export interface StakeIntentService extends Service {

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
   * Gets the required minimum stake for a given intent
   * @param intent The declared intent to filter for
   * @returns The required minimum stake for the intent
   */
  getRequiredMinimumStakeForIntent(intent: Intent): bigint

  /**
   * Checks if the address is staked for a block for a given intent
   * @param block The block number to check
   * @param intent The declared intent to filter for
   * @param address The address to check
   */
  isStakedForBlock(block: number, intent: Intent, address: Address): Promise<boolean>
}
