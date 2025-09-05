import type { Hex } from '@xylabs/hex'

/**
 * A chain/network identifier, such as chain ID or name
 */
export type Networkish = string | Hex

/**
 * Represents an Addresses intent to initiate a token bridge.
 */
export interface BridgeIntentFields {

  /**
   * Destination network
   */
  dest: Networkish

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
   * Token amount to bridge form source
   */
  srcAmount: Hex

  /**
   * Token being bridged from
   */
  srcToken: Hex
}
