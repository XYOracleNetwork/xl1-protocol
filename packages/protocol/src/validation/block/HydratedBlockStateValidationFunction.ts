import type { Promisable } from '@xylabs/sdk-js'

import type {
  AccountBalanceViewer,
  BaseContext, ChainId, HydratedBlockWithHashMeta,
  XL1BlockNumber,
} from '../../model/index.ts'
import type { HydratedBlockStateValidationError } from './error.ts'

export type ChainAtBlockNumberFunction = (blockNumber: XL1BlockNumber) => Promisable<ChainId>

export interface HydratedBlockStateValidationFunctionContext extends BaseContext {
  accountBalance: AccountBalanceViewer
  chainIdAtBlockNumber: ChainAtBlockNumberFunction
}

/**
 * A function that validates a hydrated block against chain state.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockStateValidationFunction = (
  context: HydratedBlockStateValidationFunctionContext,
  hydratedBlock: HydratedBlockWithHashMeta,
) => Promisable<HydratedBlockStateValidationError[]>
