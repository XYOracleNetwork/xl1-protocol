import { AsObjectFactory } from '@xylabs/object'
import { type Signed } from '@xyo-network/boundwitness-model'
import {
  type Payload, type WithHashStorageMeta, type WithStorageMeta,
} from '@xyo-network/payload-model'

import { isHydratedBoundWitness } from '../isHydratedBoundWitness.ts'
import {
  type BlockBoundWitness,
  isBlockBoundWitness, isBlockBoundWitnessWithHashStorageMeta, isBlockBoundWitnessWithStorageMeta,
} from './BlockBoundWitness.ts'

export type HydratedBlock<T extends BlockBoundWitness = BlockBoundWitness, P extends Payload = Payload> = [T, P[]]

export const isHydratedBlock = (
  value: unknown,
): value is HydratedBlock => {
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitness(value[0])
  )
}

export const asHydratedBlock = AsObjectFactory.create<HydratedBlock>(
  isHydratedBlock,
)

export type HydratedBlockWithStorageMeta<T extends HydratedBlock = HydratedBlock>
 = [WithStorageMeta<T[0]>, WithStorageMeta<T[1][number]>[]]

export const isHydratedBlockWithStorageMeta = (
  value: unknown,
): value is HydratedBlockWithStorageMeta => {
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitnessWithStorageMeta(value[0])
  )
}

export const asHydratedBlockWithStorageMeta = AsObjectFactory.create<HydratedBlockWithStorageMeta>(
  isHydratedBlockWithStorageMeta,
)

export type HydratedBlockWithHashStorageMeta<T extends HydratedBlock = HydratedBlock>
 = [WithHashStorageMeta<T[0]>, WithHashStorageMeta<T[1][number]>[]]

export const isHydratedBlockWithHashStorageMeta = (
  value: unknown,
): value is HydratedBlockWithHashStorageMeta => {
  return (
    isHydratedBoundWitness(value) && isBlockBoundWitnessWithHashStorageMeta(value[0])
  )
}

export const asHydratedBlockWithHashStorageMeta = AsObjectFactory.create<HydratedBlockWithHashStorageMeta>(
  isHydratedBlockWithHashStorageMeta,
)

export type SignedHydratedBlock<T extends HydratedBlock = HydratedBlock> = [Signed<T[0]>, T[1][number][]] & HydratedBlock

export type SignedHydratedBlockWithStorageMeta<T extends HydratedBlock = HydratedBlock>
 = [WithStorageMeta<Signed<T[0]>>, WithStorageMeta<T[1][number]>[]] & SignedHydratedBlock<T> & HydratedBlock

export type SignedHydratedBlockWithHashStorageMeta<T extends HydratedBlock = HydratedBlock>
 = [WithHashStorageMeta<Signed<T[0]>>, WithHashStorageMeta<T[1][number]>[]] & SignedHydratedBlock<T> & HydratedBlock
