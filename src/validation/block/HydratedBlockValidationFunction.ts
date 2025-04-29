import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../../protocol/index.ts'

/**
 * A function that validates a hydrated block.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockValidatorFunction = (
  hydratedBlock: HydratedBlock,
  chainId?: Address,
) => Promisable<Error[]>
