import { AsObjectFactory } from '@xylabs/object'
import type { Signed } from '@xyo-network/boundwitness-model'
import { type Payload, type WithStorageMeta } from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import {
  type BlockBoundWitness,
  isBlockBoundWitnessWithStorageMeta,
} from './BlockBoundWitness.ts'

export type HydratedBlock<T extends BlockBoundWitness = BlockBoundWitness,
  P extends Payload = Payload> = [WithStorageMeta<Signed<T>>, WithStorageMeta<P>[]]

export const isHydratedBlock = (
  value: unknown,
): value is HydratedBlock => {
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitnessWithStorageMeta(value[0])
  )
}

export const asHydratedBlock = AsObjectFactory.create<HydratedBlock>(
  isHydratedBlock,
)
