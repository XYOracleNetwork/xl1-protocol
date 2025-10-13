import type { Hash } from '@xylabs/hex'
import { isHex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness, Signed } from '@xyo-network/boundwitness-model'
import { isBoundWitness, isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

import type { ChainId } from '../model.ts'

export interface BlockBoundWitnessMeta {
  $epoch: number
}

export interface BlockBoundWitnessFields {
  /** Block number */
  block: number
  /** Chain id - this should be "0" for the genesis block */
  chain: ChainId
  /** Previous block hash if not block 0 */
  previous: Hash | null /* the previous block hash */
  /** Version of the protocol being used major * 1,000,000 + minor * 1,000 + patch */
  protocol: number
  /** Step hashes */
  step_hashes: Hash[]
}

export type BlockBoundWitness = BoundWitness<BlockBoundWitnessFields & BlockBoundWitnessMeta>

export const isBlockBoundWitness = (value: unknown): value is BlockBoundWitness => {
  const typedObj = value as BlockBoundWitness
  return isBoundWitness(value)
    && Number.isInteger(typedObj.block)
    && isHex(typedObj.chain)
}

export const isSignedBlockBoundWitness = (value: unknown): value is Signed<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isSigned(value)
}

export const isBlockBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isStorageMeta(value)
}

export const isSignedBlockBoundWitnessWithStorageMeta = (value: unknown): value is Signed<WithStorageMeta<BlockBoundWitness>> => {
  return isBlockBoundWitnessWithStorageMeta(value) && isSigned(value)
}

export const isBlockBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isHashStorageMeta(value)
}

export const isSignedBlockBoundWitnessWithHashStorageMeta = (value: unknown): value is Signed<WithHashStorageMeta<BlockBoundWitness>> => {
  return isBlockBoundWitnessWithHashStorageMeta(value) && isSigned(value)
}

export const asBlockBoundWitness = AsObjectFactory.create(isBlockBoundWitness)
export const asSignedBlockBoundWitness = AsObjectFactory.create(isSignedBlockBoundWitness)

export const asBlockBoundWitnessWithStorageMeta = AsObjectFactory.create(isBlockBoundWitnessWithStorageMeta)
export const asSignedBlockBoundWitnessWithStorageMeta = AsObjectFactory.create(isSignedBlockBoundWitnessWithStorageMeta)

export const asBlockBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isBlockBoundWitnessWithHashStorageMeta)
export const asSignedBlockBoundWitnessWithHashStorageMeta = AsObjectFactory.create(isSignedBlockBoundWitnessWithHashStorageMeta)
