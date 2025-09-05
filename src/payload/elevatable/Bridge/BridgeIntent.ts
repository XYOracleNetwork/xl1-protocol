import type { Hex } from '@xylabs/hex'

/**
 * Represents an Addresses intent to initiate a token bridge.
 */
export interface BridgeIntentFields {

  /**
   * Destination network
   */
  dest: Hex

  /**
   * Destination address (EOA or contract)
   */
  destAddress: Hex

  /**
   * Token amount to bridge to destination
   */
  destAmount: Hex

  /**
   * Token being bridged to
   */
  destToken: Hex

  /**
   * Unique identifier for replay protection
   */
  nonce: string

  /**
   * Source network
   */
  src: Hex

  /**
   * Source address (EOA or contract)
   */
  srcAddress: Hex

  /**
   * Token amount to bridge form source
   */
  srcAmount: Hex

  /**
   * Token being bridged from
   */
  srcToken: Hex
}
