export interface BlockStart {
  /**
   * The block at which the duration starts
   */
  nbf: number
}

export interface BlockEnd {
  /**
   * The block at which the duration ends
   */
  exp: number
}

/**
 * A optional duration referenced to block numbers
 */
export interface OptionalBlockDuration extends Partial<BlockStart>, Partial<BlockEnd> {}

/**
 * A duration referenced to block numbers
 */
export interface BlockDuration extends BlockStart, BlockEnd {}
