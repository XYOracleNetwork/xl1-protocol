import type { Promisable } from '@xylabs/sdk-js'
import type {
  ChainId, HydratedBlockWithHashMeta, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import type { AccountBalanceViewer, BaseContext } from '../../model/index.ts'
import type { HydratedBlockStateValidationError } from './error.ts'

/**
 * A function that validates a hydrated block against chain state.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockStateValidationFunction = (
  context: BaseContext,
  hydratedBlock: HydratedBlockWithHashMeta,
  chainIdAtBlockNumber: (blockNumber: XL1BlockNumber) => Promisable<ChainId>,
  services: { accountBalance: AccountBalanceViewer },
) => Promisable<HydratedBlockStateValidationError[]>
