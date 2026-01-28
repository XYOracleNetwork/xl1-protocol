import type { Promisable } from '@xylabs/sdk-js'
import type { BlockBoundWitness, ChainId } from '@xyo-network/xl1-protocol'

import type { BaseContext } from '../../model/index.ts'
import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  context: BaseContext,
  block: BlockBoundWitness,
  chainId?: ChainId,
) => Promisable<BlockValidationError[]>
