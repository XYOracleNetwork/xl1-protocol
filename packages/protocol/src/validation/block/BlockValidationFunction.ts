import type { Promisable } from '@xylabs/sdk-js'

import type { BlockBoundWitness } from '../../block/index.ts'
import type { ChainId } from '../../chain/index.ts'
import type { BaseContext } from '../../model/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  context: BaseContext,
  block: BlockBoundWitness,
  chainId?: ChainId,
) => Promisable<BlockValidationError[]>
