import type { Promisable } from '@xylabs/sdk-js'

import type { BaseContext, ChainId } from '../../model/index.ts'
import type { BlockBoundWitness } from '../../zod/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  context: BaseContext,
  block: BlockBoundWitness,
  chainId?: ChainId,
) => Promisable<BlockValidationError[]>
