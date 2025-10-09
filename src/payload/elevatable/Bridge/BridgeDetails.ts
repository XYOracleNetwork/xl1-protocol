import { HexZod } from '@xylabs/hex'
import z from 'zod'

/**
 * Represents a transfer destination
 */
export const BridgeDetailsDestinationFieldsZod = z.object({
  /**
   * Destination network
   */
  dest: HexZod.describe('The destination network identifier'),
  /**
   * Destination address (EOA or contract)
   */
  destAddress: HexZod.describe('The destination address (EOA or contract)'),
  /**
   * Token amount to bridge to destination
   */
  destAmount: HexZod.describe('The token amount to bridge to destination'),
  /**
   * Token being bridged to
   */
  destToken: HexZod.describe('The token being bridged to'),
})

/**
 * Represents a transfer destination
 */
export type BridgeDetailsDestinationFields = z.infer<typeof BridgeDetailsDestinationFieldsZod>

/**
 * Represents a transfer source
 */
export const BridgeDetailsSourceFieldsZod = z.object({
  /**
   * Source network
   */
  src: HexZod.describe('The source network identifier'),

  /**
   * Source address (EOA or contract)
   */
  srcAddress: HexZod.describe('The source address (EOA or contract)'),
  /**
   * Token amount to bridge from source
   */
  srcAmount: HexZod.describe('The token amount to bridge from source'),
  /**
   * Token being bridged from
   */
  srcToken: HexZod.describe('The token being bridged from'),
})

/**
 * Represents a transfer from a source chain/token/address/amount to a destination chain/token/address/amount.
 */
export const BridgeDetailsFieldsZod = BridgeDetailsSourceFieldsZod.extend(
  BridgeDetailsDestinationFieldsZod.shape,
)

/**
 * Represents a transfer from a source chain/token/address/amount to a destination chain/token/address/amount.
 */
export type BridgeDetailsFields = z.infer<typeof BridgeDetailsFieldsZod>
