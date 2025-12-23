import type { Promisable } from '@xylabs/sdk-js'
import type { ChainId, HydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import type { HydratedBlockValidationError } from './error.ts'

/**
 * A function that validates a hydrated block.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockValidationFunction = (
  hydratedBlock: HydratedBlockWithHashMeta,
  chainId?: ChainId,
) => Promisable<HydratedBlockValidationError[]>
