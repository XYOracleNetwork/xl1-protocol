import type { Promisable } from '@xylabs/promise'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { Chain } from '../../model.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  block: BlockBoundWitness,
  chainId?: Chain,
) => Promisable<BlockValidationError[]>
