import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { HydratedBlock } from '../../block/index.ts'
import type { AccountBalanceService } from '../../services/index.ts'

/**
 * A function that validates a hydrated block against chain state.
 * @param hydratedBlock The hydrated block to validate.
 * @param chainId The chain ID to use for validation.
 * @param archivist The archivist to use for validation.
 * @returns An array of errors if the block is invalid, or an empty array if it is valid.
 */
export type HydratedBlockStateValidationFunction = (
  hydratedBlock: HydratedBlock,
  chainId: Address,
  services: { accountBalance: AccountBalanceService },
) => Promisable<Error[]>
