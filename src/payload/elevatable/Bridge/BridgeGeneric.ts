import type {
  Address, EthAddress, Hash, Hex,
} from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from '../Executable.ts'

/**
 * A chain/network identifier, such as chain ID or name
 */
export type Networkish = string | Hex

/**
 * Direction of bridging
 */
export type BridgeDirection = 'srcToDest' | 'destToSrc'

/**
 * Represents an Addresses intent to initiate a token bridge.
 */
export interface BridgeIntentFields {
  /**
   * Token amount to bridge
   */
  amount: Hex

  /**
   * Destination network
   */
  dest: Networkish

  /**
   * Destination address (EOA or contract)
   */
  destAddress: Hex

  /**
   * Token being bridged to
   */
  destToken: Hex

  /**
   * Direction for clarity (optional if always derivable)
   */
  direction?: BridgeDirection

  /**
   * Request initiator (EOA or contract)
   */
  initiator: Hex

  /**
   * Unique identifier for replay protection
   */
  nonce: string

  /**
   * Source network
   */
  src: Networkish

  /**
   * Source address (EOA or contract)
   */
  srcAddress: Hex

  /**
   * Token being bridged from
   */
  srcToken: Hex
}

/**
 * Represents an observation that confirms the bridge action occurred on the destination chain.
 */
export interface BridgeObservationFields extends BridgeIntentFields {
  /**
   * Destination chain confirmation
   */
  destConfirmation: Hash

  /**
   * Type of confirmation (e.g., 'txHash', 'eventId')
   */
  destConfirmationType?: string

  /**
   * Timestamp of the observation
   */
  observedAt?: number
}

/**
 * Final confirmation tying the intent and the observation together.
 */
export interface BridgeCompleteFields {

  /**
   * Timestamp when the bridge was completed
   */
  completedAt?: number

  /**
   * Reference to observed confirmation hash
   */
  destObservation: Hash

  /**
   * Reference to original intent hash
   */
  srcIntent: Hash

}
