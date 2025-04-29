import type { HydratedBlock } from '../../protocol/index.ts'
import type { HydratedBoundWitnessInstance } from '../HydratedBoundWitness.ts'
import type { HydratedTransactionInstance } from '../transaction/index.ts'
import type { BlockFieldsInstance } from './BlockFields.ts'

export interface HydratedBlockInstance<T extends HydratedBlock = HydratedBlock> extends
  BlockFieldsInstance<HydratedTransactionInstance>, HydratedBoundWitnessInstance<T> {
  publicPayloads: T[1][number][]
}
