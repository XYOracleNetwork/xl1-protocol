import type { Promisable } from '@xylabs/sdk-js'

import type {
  BaseContext, BlockBoundWitness, ChainId,
} from '../../model/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  context: BaseContext,
  block: BlockBoundWitness,
  chainId?: ChainId,
) => Promisable<BlockValidationError[]>
