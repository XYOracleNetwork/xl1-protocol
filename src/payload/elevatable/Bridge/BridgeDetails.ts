import type { Hex } from '@xylabs/hex'

/**
 * Represents a transfer destination
 */
export interface BridgeDetailsDestinationFields {
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
}

/**
 * Represents a transfer source
 */
export interface BridgeDetailsSourceFields {
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

/**
 * Represents a transfer from a source chain/token/address/amount to a destination chain/token/address/amount.
 */
export interface BridgeDetailsFields extends BridgeDetailsSourceFields, BridgeDetailsDestinationFields {}
