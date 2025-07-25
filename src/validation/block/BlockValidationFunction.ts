import type { Hex } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  block: BlockBoundWitness,
  chainId?: Hex,
) => Promisable<BlockValidationError[]>
