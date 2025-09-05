import type { Hex } from '@xylabs/hex'

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
