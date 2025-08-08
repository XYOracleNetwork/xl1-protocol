import type { Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../../block/index.ts'
import type { HydratedBlockValidationError } from './error.ts'

/**
 * A function that validates a hydrated block.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockValidationFunction = (
  hydratedBlock: HydratedBlock,
  chainId?: Hex,
) => Promisable<HydratedBlockValidationError[]>
