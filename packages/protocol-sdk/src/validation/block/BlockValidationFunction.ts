import type { Promisable } from '@xylabs/sdk-js'
import type { BlockBoundWitness, ChainId } from '@xyo-network/xl1-protocol'

import type { BlockValidationError } from './error.ts'

export type BlockValidatorFunction = (
  block: BlockBoundWitness,
  chainId?: ChainId,
) => Promisable<BlockValidationError[]>
