import type { Hex } from '@xylabs/hex'

/**
 * Represents a transfer from a source chain/token/address to a destination chain/token/address.
 */
export interface BridgeDetailsFields {

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
