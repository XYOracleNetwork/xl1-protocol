import type { Promisable } from '@xylabs/sdk-js'

import type { HydratedBlockWithHashMeta } from '../../block/index.ts'
import type { XL1BlockNumber } from '../../BlockNumber/index.ts'
import type { ChainId } from '../../chain/index.ts'
import type { BaseContext } from '../../model/index.ts'
import type { HydratedBlockValidationError } from './error.ts'

export interface HydratedBlockValidationFunctionContext extends BaseContext {}

/**
 * A function that validates a hydrated block.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainIdAtBlockNumber A function to get the chain ID at a specific block number.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockValidationFunction = (
  context: HydratedBlockValidationFunctionContext,
  hydratedBlock: HydratedBlockWithHashMeta,
  chainIdAtBlockNumber?: (blockNumber: XL1BlockNumber) => Promisable<ChainId>,
) => Promisable<HydratedBlockValidationError[]>
