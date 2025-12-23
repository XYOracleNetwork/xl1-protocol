import type { ChainId } from '../model/index.ts'

/**
 * Required info for a chain reference
 */
export interface ChainReference {
  /**
   * The contract address referenced by the chain
   */
  chain: ChainId
}
