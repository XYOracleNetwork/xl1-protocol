import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  block: BlockBoundWitness,
  chainId?: Address,
) => Promisable<(BlockValidationError)[]>
