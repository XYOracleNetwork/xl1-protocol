import type { HydratedBlock } from '@xyo-network/xl1-protocol'

import type { HydratedBoundWitnessInstance } from '../HydratedBoundWitness.ts'
import type { SignedInstance } from '../modifiers/index.ts'
import type { HydratedTransactionInstance } from '../transaction/index.ts'
import type { BlockFieldsInstance } from './BlockFields.ts'

export interface HydratedBlockInstance<T extends HydratedBlock = HydratedBlock> extends
  BlockFieldsInstance<HydratedTransactionInstance>, HydratedBoundWitnessInstance<T>, SignedInstance {}
